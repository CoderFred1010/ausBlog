// Koordinater
const cph = [55.6181, 12.6560];   // CPH Airport
const bangkok = [13.6900, 100.7501];
const sydney = [-33.8688, 151.2093];

// Opret map
const map = L.map("map").setView([25, 80], 3);

// Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

// Rute (polyline)
L.polyline([cph, bangkok, sydney], {
  color: "red",
  weight: 4
}).addTo(map);

// Markers
L.marker(cph).addTo(map).bindPopup("København (CPH)");
L.marker(sydney).addTo(map).bindPopup("Sydney");

// Bangkok marker med billede ved hover
const bangkokMarker = L.marker(bangkok).addTo(map);

bangkokMarker.bindPopup(`
    <b>Bangkok</b><br>
    <img src="/Resources/padThai.jpg" class="popup-img">
    <br>Halvspist Pad Thai ✈️
`);

// Vis popup ved hover
bangkokMarker.on("mouseover", function () {
    this.openPopup();
});
bangkokMarker.on("mouseout", function () {
    this.closePopup();
});
