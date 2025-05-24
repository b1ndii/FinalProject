var prishtina = L.marker([42.65917322650542, 21.165693430509386])
  .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Prishtina</span>
      </b>
    </a>
  `);

    gilan = L.marker([42.463389327478964, 21.469076579236056])
    .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Gilan</span>
      </b>
    </a>
  `);

  ferizaj = L.marker([42.37358381814714, 21.14639044611495])
    .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Ferizaj</span>
      </b>
    </a>
  `);

  prizren = L.marker([42.22105646478453, 20.72822919601476])
    .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Prizren</span>
      </b>
    </a>
  `);

  peja = L.marker([42.66260107998889, 20.286585844563216])
    .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Peja</span>
      </b>
    </a>
  `);

  gjakova = L.marker([42.38436370552528, 20.427229896992653])
    .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Gjakova</span>
      </b>
    </a>
  `);

  mitrovica = L.marker([42.89409771632134, 20.865916258926536])
    .bindPopup(`
    <a style="text-decoration: none; color:black; display: block; text-align: center;" href="https://example.com/prishtina">
      <b>
        See the landmarks<br>
        <span style="display: block;">of Mitrovica</span>
      </b>
    </a>
  `);

var cities = L.layerGroup([prishtina, gilan, ferizaj, prizren, peja, gjakova, mitrovica]);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [42.6026, 20.9020],
    zoom: 9,
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



