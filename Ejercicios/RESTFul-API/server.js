// Importar Express
const express = require('express');
//Importar Cors
const cors = require('cors');
//Import path
const path = require('path')
// Crear una instancia de Express
const app = express();
// Definir el puerto en el que se ejecutará el servidor
const PORT = 3000;
// Middleware para poder recibir datos JSON
app.use(express.json());
// Rutas RESTful
// Ruta GET: Retorna todos los usuarios

app.use(cors());

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/api/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Ana' }
    ];
    res.json(usuarios);
});
// Ruta POST: Crea un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    console.log('Usuario creado:', nuevoUsuario);
    res.status(201).send('Usuario creado');
});
// Ruta PUT: Actualiza un usuario existente
app.put('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuarioActualizado = req.body;
    console.log(`Usuario con ID ${id} actualizado:`, usuarioActualizado);
    res.send(`Usuario con ID ${id} actualizado`);
});
// Ruta DELETE: Elimina un usuario
app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    console.log(`Usuario con ID ${id} eliminado`);
    res.send(`Usuario con ID ${id} eliminado`);
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});