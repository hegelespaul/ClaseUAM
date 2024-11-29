// Importar las dependencias necesarias
const express = require('express');  // Framework para crear el servidor web
const path = require('path');       // Módulo para trabajar con rutas de archivos
const fs = require('fs');           // Módulo para trabajar con el sistema de archivos
const app = express();              // Crear la aplicación Express
const port = 3000;                  // Puerto donde el servidor escuchará
const cors = require('cors');       // Middleware para habilitar CORS (Cross-Origin Resource Sharing)

// Middleware para parsear cuerpos de solicitud en formato JSON
app.use(express.json());
// Middleware para habilitar CORS
app.use(cors());

// Servir archivos estáticos (como CSS, JS e imágenes) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir el archivo HTML del formulario (formulario.html)
app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html'));
});

// Endpoint para obtener el archivo GeoJSON
app.get('/geojson', (req, res) => {
    // Ruta del archivo GeoJSON
    const geojsonPath = path.join(__dirname, 'data', 'map.geojson');

    // Leer el archivo GeoJSON y enviarlo como respuesta
    fs.readFile(geojsonPath, 'utf8', (err, data) => {
        if (err) {
            // Si hay un error al leer el archivo, devolver error 500
            return res.status(500).json({ message: 'Error reading GeoJSON file' });
        }
        // Parsear el contenido del archivo como JSON y enviarlo al cliente
        res.json(JSON.parse(data));
    });
});

// Endpoint para guardar los datos GeoJSON actualizados
app.post('/update-geojson', (req, res) => {
    // Obtener los datos GeoJSON actualizados desde el cuerpo de la solicitud
    const newData = req.body;
    // Ruta del archivo GeoJSON donde se almacenarán los datos
    const geojsonPath = path.join(__dirname, 'data', 'map.geojson');
    console.log(req.body); // Imprimir los datos que llegaron en la solicitud

    // Leer el archivo GeoJSON actual
    fs.readFile(geojsonPath, 'utf8', (err, data) => {
        if (err) {
            // Si hay un error al leer el archivo, devolver error 500
            return res.status(500).json({ message: 'Error reading GeoJSON file' });
        }

        // Parsear el contenido del archivo GeoJSON
        const geojson = JSON.parse(data);

        // Agregar los nuevos datos (features) al principio del archivo GeoJSON
        geojson.features.unshift(newData);

        // Guardar los datos actualizados en el archivo GeoJSON
        fs.writeFile(geojsonPath, JSON.stringify(geojson, null, 2), 'utf8', (err) => {
            if (err) {
                // Si hay un error al guardar el archivo, devolver error 500
                return res.status(500).json({ message: 'Error saving updated GeoJSON file' });
            }
            // Responder con un mensaje de éxito
            res.status(200).json({ message: 'GeoJSON updated successfully' });
        });
    });
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
