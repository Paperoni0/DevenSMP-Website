const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'tiles/{z}/{x}/{y}.png',
                tileSize: 256
            })
        })
    ],
    view: new ol.View({
        center: [-86, 18],
        zoom: 5
    })
});

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
                            src: online ? 'assets/images/player_online.png' : 'assets/images/player_offline.png',
                            scale: 0.5
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
