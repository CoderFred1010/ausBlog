// ===== Koordinater =====
const darling = [-33.8748, 151.1982];
const opera = [-33.8568, 151.2153];
const bondi = [-33.8908, 151.2743];

// ===== Map =====
const map = L.map("sydneyMap").setView([-33.87, 151.22], 12);

// Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);


// ===== Darling Harbour =====
const darlingMarker = L.marker(darling).addTo(map);

darlingMarker.bindPopup(`
  <b>Darling Harbour</b><br>
  <img src="/Resources/darling.jpg" class="popup-img">
`);

darlingMarker.on("mouseover", () => darlingMarker.openPopup());
darlingMarker.on("mouseout", () => darlingMarker.closePopup());


// ===== Opera House =====
const operaMarker = L.marker(opera).addTo(map);

operaMarker.bindPopup(`
  <b>Opera House</b><br>
  <img src="/Resources/opera.jpg" class="popup-img">
`);

operaMarker.on("mouseover", () => operaMarker.openPopup());
operaMarker.on("mouseout", () => operaMarker.closePopup());


// ===== Bondi Beach (NY) =====
const bondiMarker = L.marker(bondi).addTo(map);

bondiMarker.bindPopup(`
  <b>Bondi Beach</b><br>
  <img src="/Resources/bondi.jpg" class="popup-img">
`);

bondiMarker.on("mouseover", () => bondiMarker.openPopup());
bondiMarker.on("mouseout", () => bondiMarker.closePopup());


// ===== Auto zoom så alle markers passer =====
const group = L.featureGroup([darlingMarker, operaMarker, bondiMarker]);
map.fitBounds(group.getBounds().pad(0.2));
