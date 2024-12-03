// Variable para almacenar los datos del archivo GeoJSON
let geojsonFeature;

// Crear el mapa centrado en unas coordenadas específicas
var map = L.map('mapa').setView([19.2906, -99.4985], 17);

// Cargar el mapa con un estilo oscuro (puedes descomentar el estilo de OpenStreetMap si lo prefieres)
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 0,
  maxZoom: 20,
  attribution: false,
  ext: 'png'
}).addTo(map);

// Crear un ícono personalizado para los marcadores
var customIcon = L.icon({
  iconUrl: 'https://www.ler.uam.mx/microcbi/wp-content/uploads/2023/09/UAML.png',  // URL de la imagen del marcador
  iconSize: [45, 45],  // Tamaño del marcador (ancho y alto en píxeles)
  iconAnchor: [25, 50],  // Anclaje en la parte inferior central del ícono
  popupAnchor: [0, -50]  // Posición del popup relativo al ícono
});

// Función para manejar las interacciones con cada característica del GeoJSON
function onEachFeature(feature, layer) {
  // Si el objeto tiene propiedades y tiene un 'title', bindear un popup con la información
  if (feature.properties && feature.properties.title) {
    layer.bindPopup('<h2>' + feature.properties.title + '</h2>' + '<br>' + feature.properties.description + '<br>' //+
      // Incluir un video de YouTube dentro del popup
      // '<iframe width="auto" height="315" src="https://www.youtube.com/embed/hnRaZKOmiwo?si=oqbhqaxOhBBuPvl5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      );
  }

  // Si la característica es un punto (marcador), aplicar el ícono personalizado
  if (feature.geometry.type === "Point") {
    layer.setIcon(customIcon);  // Aplicar ícono personalizado a cada marcador de punto
  }

  // Función para agrandar el marcador al pasar el mouse por encima
  layer.on('mouseover', function () {
    // Cambiar el tamaño del ícono al pasar el mouse
    this.setIcon(L.icon({
      iconUrl: 'https://www.ler.uam.mx/microcbi/wp-content/uploads/2023/09/UAML.png',  // Mismo ícono
      iconSize: [55, 55],  // Nuevo tamaño al pasar el mouse (55x55 píxeles)
      iconAnchor: [30, 55],  // Ajustar el anclaje para centrar el ícono más grande
      popupAnchor: [0, -75]  // Ajustar la posición del popup
    }));
  });

  // Función para restablecer el tamaño del marcador cuando el mouse sale
  layer.on('mouseout', function () {
    this.setIcon(customIcon);  // Restablecer al tamaño original
  });
}

// Obtener los datos del archivo GeoJSON
fetch('/geojson')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');  // Manejar errores de la respuesta
    }
    return response.json();  // Parsear la respuesta JSON
  })
  .then(data => {
    geojsonFeature = data;  // Almacenar los datos parseados en la variable geojsonFeature
    console.log(geojsonFeature);  // Opcional: loguear los datos para depuración
    // Añadir los datos GeoJSON al mapa con la función onEachFeature
    L.geoJSON(geojsonFeature, {
      onEachFeature: onEachFeature
    }).addTo(map);
  //   setTimeout(function() {
  //     map.setView([32.851105, -117.272999], 14, {headingDegrees: 150, tiltDegrees:20.0});
  //   }, 20000);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);  // Manejar errores de la operación fetch
  });
