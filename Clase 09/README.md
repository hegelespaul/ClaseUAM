# Tutorial: Crear una Web con Express y Mapa Interactivo

Este tutorial explica cómo crear una aplicación web con **Node.js**, **Express**, y un mapa interactivo que permite a los usuarios guardar datos geográficos.

## Estructura del Proyecto

```
/mi-proyecto
│
├── /public
│   ├── index.html
│   └── formulario.html
│
├── /data
│   └── map.geojson
│
├── server.js
├── package.json
└── styles.css (opcional)
```

## 1. Configuración del Servidor con **Express**

### `server.js`

El servidor se encarga de servir archivos estáticos (HTML, CSS, JS) y gestionar las rutas para manejar datos **GeoJSON**. Se usan **rutas GET** y **POST** para interactuar con el cliente.

#### Código básico:

```javascript
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Servir archivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta GET para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta GET para servir el formulario
app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html'));
});

// Ruta GET para obtener el archivo GeoJSON
app.get('/geojson', (req, res) => {
    const geojsonPath = path.join(__dirname, 'data', 'map.geojson');
    fs.readFile(geojsonPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Error leyendo GeoJSON' });
        res.json(JSON.parse(data));
    });
});

// Ruta POST para actualizar el archivo GeoJSON
app.post('/update-geojson', (req, res) => {
    const newData = req.body;
    const geojsonPath = path.join(__dirname, 'data', 'map.geojson');
    fs.readFile(geojsonPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Error leyendo GeoJSON' });

        const geojson = JSON.parse(data);
        geojson.features.unshift(newData); // Añadir nuevo punto al GeoJSON

        fs.writeFile(geojsonPath, JSON.stringify(geojson, null, 2), 'utf8', (err) => {
            if (err) return res.status(500).json({ message: 'Error guardando GeoJSON' });
            res.status(200).json({ message: 'GeoJSON actualizado' });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
```

### Explicación:

- **Dependencias**: Usamos **Express** para crear rutas, **fs** para leer y escribir archivos, y **cors** para permitir peticiones desde diferentes orígenes.
- **Rutas**:
  - **`/`**: Sirve la página principal `index.html`.
  - **`/formulario`**: Sirve el formulario `formulario.html`.
  - **`/geojson`**: Obtiene el archivo `map.geojson`.
  - **`/update-geojson`**: Recibe datos desde el cliente (nuevo punto) y actualiza el archivo GeoJSON.

## 2. Formulario con Mapa Interactivo

El formulario permite a los usuarios ingresar un **título** y una **descripción**, además de seleccionar un punto en el mapa utilizando **Leaflet**.

#### `formulario.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario con Mapa</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</head>
<body>
    <h1>Formulario con Mapa Interactivo</h1>
    <form id="data-form">
        <label for="title">Título:</label>
        <input type="text" id="title" name="title" required />
        <label for="description">Descripción:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        <div id="map" style="height: 400px;"></div>
        <button type="button" id="save-button">Guardar Datos</button>
    </form>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
        let latitude, longitude;
        const map = L.map('map').setView([0, 0], 2); // Mapa global centrado
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        let marker;
        map.on('click', function (e) {
            latitude = e.latlng.lat;
            longitude = e.latlng.lng;
            if (marker) map.removeLayer(marker);
            marker = L.marker([latitude, longitude]).addTo(map);
        });

        document.getElementById('save-button').addEventListener('click', () => {
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            if (!latitude || !longitude) {
                alert('Por favor, selecciona un punto en el mapa.');
                return;
            }

            const newEntry = {
                type: "Feature",
                properties: { title, description },
                geometry: { type: "Point", coordinates: [longitude, latitude] }
            };

            fetch('/update-geojson', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEntry)
            })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(err => alert('Error al guardar los datos.'));
        });
    </script>
</body>
</html>
```

### Explicación:

- **Mapa Interactivo**: Usamos **Leaflet** para crear un mapa en el que el usuario puede hacer clic para seleccionar una ubicación.
- **Guardar Datos**: Cuando el usuario hace clic en el botón "Guardar Datos", el formulario envía el título, la descripción y las coordenadas seleccionadas al servidor, que actualiza el archivo `map.geojson`.

## 3. Iniciar el Servidor

1. **Instala dependencias**:
   ```bash
   npm init -y
   npm install express cors
   ```

2. **Inicia el servidor**:
   ```bash
   node server.js
   ```

3. **Abre el navegador** en `http://localhost:3000` para interactuar con la aplicación.

