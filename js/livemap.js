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
                    const xDir = Math.floor(x / 10);
                    const yDir = Math.floor(y / 10);
                    imageTile.getImage().src = `assets/images/livemap/tiles/zoom.${z}/${xDir}/${yDir}/tile.${x}.${y}.jpeg`;
                },
                tileSize: 256,
                minZoom: -6,
                maxZoom: 0
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-86, 18]),
        zoom: 0
    })
});

const spawnFeature = new ol.Feature({
    geometry: new ol.geom.Point([-86, 18])
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
const spawnLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [spawnFeature]
    })
});
map.addLayer(spawnLayer);

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
                        geometry: new ol.geom.Point(coords)
                    });
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
                    map.addLayer(new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: [playerMarkers[username]]
                        })
                    }));
                } else {
                    playerMarkers[username].getGeometry().setCoordinates(coords);
                }
            });
        });
}

setInterval(updatePlayerLocations, 10000);
