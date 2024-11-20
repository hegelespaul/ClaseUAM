let geojsonFeature;


var map = L.map('mapa').setView([19.29102, -99.498533], 17);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

///OSCURITO
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: false,
	ext: 'png'
}).addTo(map);


fetch('map.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    geojsonFeature = data; // Store the parsed JSON data into the variable
    console.log(geojsonFeature); // Optionally log to the console for debugging
    L.geoJSON(geojsonFeature).addTo(map);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

