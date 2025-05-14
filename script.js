var littleton = L.marker([42.65917322650542, 21.165693430509386]).bindPopup('Prishtina'),
    denver    = L.marker([42.463389327478964, 21.469076579236056]).bindPopup('Gilan')


var cities = L.layerGroup([littleton, denver]);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [42.65917322650542, 21.165693430509386],
    zoom: 10,
    layers: [osm, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "Cities": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

var baseMaps = {
    "OpenStreetMap": osm,
    "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
};

var crownHill = L.marker([42.66189745193389, 21.169184143234393]).bindPopup('Parku i Qytetit.'),
    rubyHill = L.marker([42.67499693234073, 21.211895195910767]).bindPopup('Parku i Gërmisë.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");



