// Create a custom black marker icon
var blackIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // Default Leaflet marker icon
    iconSize: [25, 41], // Size of the marker
    iconAnchor: [12, 41], // Anchor the marker to the bottom center
    popupAnchor: [1, -34], // Popup opens above the marker
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
});

// Ensure the document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map and set its view to a specific location and zoom level
    var map = L.map('map').setView([20, 0], 2);

    // Add a tile layer to the map (you can use other providers like Mapbox, Esri, etc.)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of travel locations with [latitude, longitude, description]
    var locations = [
        [48.8566, 2.3522, "Paris, France"],
        [40.7128, -74.0060, "New York, USA"],
        [51.5072, 0.1276, "London, England"],
        [48.8681, 2.3289, "The Ritz Paris, Paris, France"],
        [40.7109, -73.9258, "Brooklyn Mirage, Brooklyn, USA"],
        [36.2725, -115.0104, "Las Vegas Motor Speedway, Las Vegas, USA"],
        [32.8328, -117.2713, "La Jolla, San Diego, USA"],
        [39.6426, -106.378, "The Sebastian Hotel, Vail, USA"],
        [50.8468, 4.3524, "Grand Palace, Brussels, Belgium"],
        [51.5007, -0.1246, "Big Ben, London, UK"],
        [39.1869, -106.8211, "St. Regis, Aspen, USA"],
        [25.7901, -80.1367, "Mila, Miami, USA"],
        [41.8664, -87.6068, "Adler Planetarium, Chicago, USA"],
        [37.7493, -122.3857, "The Midway, San Francisco, USA"],
        [43.7731, 11.2555, "Piazza Del Duomo, Milan, Italy"],
        [40.6163, 14.5754, "Conca dei Marini, Amalfi, Italy"],
        [48.8606, 2.3376, "The Louvre, Paris, France"],
        [52.3719, 4.8959, "Red Light District, Amsterdam, Netherlands"],
        [39.6655, -105.2052, "Red Rocks, Morrison, USA"],
        [21.5928, -158.1034, "Haleiwa, Oahu, USA"],
        [1.2816, 103.8636, "Supertree Observatory, Marina Bay Area, Singapore"],
        [9.5486, 123.774, "Alona Beach, Panglao, Philippines"],
        [51.4975, -0.0437, "Printworks, London, UK"],
        [33.7701, -118.1937, "Long Beach, Los Angeles, USA"],
        [9.8297, 124.1397, "Chocolate Hills, Bohol, Philippines"],
        [1.2908, 103.8373, "Robertson Quay, River Valley, Singapore"],
        [48.8674, 2.3294, "Place Vendome, Paris, France"],
        [52.3791, 4.9003, "Amsterdam Centraal, Amsterdam, Netherlands"]
    ];
    

    // Add markers with custom black icon
    locations.forEach(function(location) {
        L.marker([location[0], location[1]], { icon: blackIcon }).addTo(map)
            .bindPopup(location[2]);
    });
});