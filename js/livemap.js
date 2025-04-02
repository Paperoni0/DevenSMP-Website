class RegionMap {
    constructor() {
        this.tileSize = 256;
        this.worldMinX = UnminedMapProperties.minRegionX * 512;
        this.worldMinZ = UnminedMapProperties.minRegionZ * 512;
        this.worldWidth = (UnminedMapProperties.maxRegionX + 1 - UnminedMapProperties.minRegionX) * 512;
        this.worldHeight = (UnminedMapProperties.maxRegionZ + 1 - UnminedMapProperties.minRegionZ) * 512;
    }

    hasTile(tileX, tileZ, zoomLevel) {
        const zoomFactor = Math.pow(2, zoomLevel);
        const minTileX = Math.floor(this.worldMinX * zoomFactor / this.tileSize);
        const minTileZ = Math.floor(this.worldMinZ * zoomFactor / this.tileSize);
        const maxTileX = Math.ceil((this.worldMinX + this.worldWidth) * zoomFactor / this.tileSize) - 1;
        const maxTileZ = Math.ceil((this.worldMinZ + this.worldHeight) * zoomFactor / this.tileSize) - 1;
        return !(tileX < minTileX || tileZ < minTileZ || tileX > maxTileX || tileZ > maxTileZ);
    }
}

const regionMap = new RegionMap();

const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                tileLoadFunction: (imageTile, src) => {
                    const coords = imageTile.getTileCoord();
                    const z = coords[0];
                    const x = coords[1];
                    const y = -coords[2] - 1;
                    const worldZoom = -z;
                    if (regionMap.hasTile(x, y, worldZoom)) {
                        let tileUrl;
                        if (z < 0) {
                            tileUrl = `assets/images/livemap/tiles/zoom.${z}/${x}/${y}/tile.${x}.${y}.${UnminedMapProperties.imageFormat}`;
                        } else {
                            const xDir = x < 0 ? -1 : 0;
                            const yDir = y < 0 ? -1 : 0;
                            tileUrl = `assets/images/livemap/tiles/zoom.${z}/${xDir}/${yDir}/tile.${x}.${y}.${UnminedMapProperties.imageFormat}`;
                        }
                        imageTile.getImage().src = tileUrl;
                    } else {
                        imageTile.getImage().src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBgYAAAAAUAAYehTtQAAAAASUVORK5CYII=';
                    }
                },
                tileSize: [256, 256],
                minZoom: UnminedMapProperties.minZoom,
                maxZoom: UnminedMapProperties.maxZoom
            })
        })
    ],
    view: new ol.View({
        center: [UnminedMapProperties.centerX, UnminedMapProperties.centerZ],
        zoom: UnminedMapProperties.defaultZoom
    })
});

const spawnSource = new ol.source.Vector();
const spawnLayer = new ol.layer.Vector({
    source: spawnSource,
    name: 'spawnLayer'
});
map.addLayer(spawnLayer);
const spawnFeature = new ol.Feature({
    geometry: new ol.geom.Point([0, 0])
});
spawnFeature.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
        src: 'assets/images/livemap/world_spawn.png',
        scale: 0.25
    }),
    text: new ol.style.Text({
        text: "World Spawn",
        offsetY: 20,
        font: "14px Arial",
        fill: new ol.style.Fill({ color: "#ffffff" }),
        backgroundFill: new ol.style.Fill({ color: "#00000088" }),
        padding: [2, 4, 2, 4]
    })
}));
spawnSource.addFeature(spawnFeature);

const playerSource = new ol.source.Vector();
const playerLayer = new ol.layer.Vector({
    source: playerSource,
    name: 'playerLayer'
});
map.addLayer(playerLayer);
let playerMarkers = {};
function updatePlayerLocations() {
    fetch('/livemapplayers', { headers: { 'Authorization': `Bearer 7d06d670a06774e62b812b94a9e2dde30756d7e0cf608afc90ee7dbaafc63c8c` } })
        .then(response => response.json())
        .then(players => {
            Object.keys(players).forEach(username => {
                let { x, z, online } = players[username];
                let coords = [x, -z];
                if (!playerMarkers[username]) {
                    playerMarkers[username] = new ol.Feature({
                        geometry: new ol.geom.Point(coords),
                        name: username
                    });
                    playerSource.addFeature(playerMarkers[username]);
                } else {
                    playerMarkers[username].getGeometry().setCoordinates(coords);
                }
                playerMarkers[username].getGeometry().setCoordinates(coords);
                playerMarkers[username].setStyle(new ol.style.Style({
                    image: new ol.style.Icon({
                        src: online ? 'assets/images/livemap/player_online.png' : 'assets/images/livemap/player_offline.png',
                        scale: 0.5
                    }),
                    text: new ol.style.Text({
                        text: username,
                        offsetY: 20,
                        font: "14px Arial",
                        fill: new ol.style.Fill({ color: "#ffffff" }),
                        backgroundFill: new ol.style.Fill({ color: "#00000088" }),
                        padding: [2, 4, 2, 4]
                    })
                }));
            });
        });
}

updatePlayerLocations();
setInterval(updatePlayerLocations, 10000);
