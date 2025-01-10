const express = require('express');
const multer = require('multer');
const cors = require('cors')
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON en las solicitudes entrantes
app.use(express.json());
// Middleware para habilitar CORS (Permitir solicitudes desde otros dominios)
app.use(cors());

// Servir archivos estáticos (como CSS, JS e imágenes) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

//////////////////////////////////////// RUTAS DE PÁGINAS WEB //////////////////////////////

// Ruta para servir el archivo HTML principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//////////////////////////////////////  SERVICIOS  /////////////////////////////////////////

// Configuración del almacenamiento para Multer
const storage = multer.diskStorage({
  // Carpeta destino donde se guardarán los archivos subidos
  destination: './uploads/',
  // Renombrar los archivos subidos añadiendo un timestamp para evitar conflictos
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// Inicialización de Multer con configuraciones adicionales
const upload = multer({
  storage,
  // Limitar el tamaño máximo de los archivos a 5MB
  limits: { fileSize: 5 * 1024 * 1024 },  //5 MB
  // Filtro para permitir solo archivos de imagen con extensiones específicas
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/; // Extensiones permitidas
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase()); // Verificar extensión
    const mimeType = fileTypes.test(file.mimetype); // Verificar tipo MIME

    if (extName && mimeType) {
      cb(null, true); // Si el archivo es válido, continuar
    } else {
      cb(new Error('¡Solo se permiten imágenes (jpeg, jpg, png)!')); // Error si el archivo no es válido
    }
  },
});

// Crear la ruta para subir archivos
app.post('/upload', upload.single('image'), (req, res) => {
    try {
      // Responder con un script que muestra un alert y redirige a la página principal
      res.send(`
        <html>
          <head>
            <script>
              alert('¡Imagen subida con éxito!');
              window.location.href = '/';
            </script>
          </head>
          <body>
          </body>
        </html>
      `);
    } catch (err) {
      // En caso de error, mostrar un alert con el mensaje del error y redirigir
      res.send(`
        <html>
          <head>
            <script>
              alert('Error: ${err.message}');
              window.location.href = '/';
            </script>
          </head>
          <body>
          </body>
        </html>
      `);
    }
});

// Servir los archivos subidos desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
