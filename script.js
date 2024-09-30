// Ensure the document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map and set its view to a specific location and zoom level
    var map = L.map('map').setView([20, 0], 2);

    // Add a tile layer to the map (you can use other providers like Mapbox, Esri, etc.)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of travel locations with [latitude, longitude, description]
    var locations = [
        [48.8566, 2.3522, "Paris, France"],
        [40.7128, -74.0060, "New York, USA"],
        [51.5072, 0.1276, "London, England"]
    ];

    // Add markers to the map
    locations.forEach(function(location) {
        L.marker([location[0], location[1]]).addTo(map)
            .bindPopup(location[2]);
    });
});
