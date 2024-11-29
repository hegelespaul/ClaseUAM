# Tutorial: Crear un Servidor RESTful con Node.js
Este tutorial te guiará para crear un servidor básico con **Node.js** usando el framework **Express**, y cómo estructurar un API RESTful. Al final, implementaremos una página `index.html` que interactúe con el servidor.
## Requisitos
Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (Si aún no lo tienes, descárgalo de [nodejs.org](https://nodejs.org/)).
## Paso 1: Inicializar un Proyecto de Node.js
1. **Crea un directorio para tu proyecto**:
   ```bash
   mkdir mi-servidor
   cd mi-servidor
   ```
2. **Inicializa el proyecto con npm**:
   ```bash
   npm init -y
   ```
   Esto creará un archivo `package.json` que contendrá la configuración de tu proyecto.
## Paso 2: Instalar Express e intalar Cors
**Express** es un framework para Node.js que facilita la creación de servidores y manejo de rutas.
1. **Instala Express**:
   ```bash
   npm install express
   ```
**CORS** (Cross-Origin Resource Sharing) es una política de seguridad de los navegadores que restringe cómo las páginas web pueden hacer peticiones a un servidor que está en un dominio diferente al de la página web que lo solicita. Esto es necesario para este ejemplo en donde aún no damos un orign a nuestra app de Express y únicamente vinculamos peticiones desde un .html
2. **Instala CORS**:
   ```bash
   npm install cors
   ```
## Paso 3: Crear el Servidor Básico
Crea un archivo `server.js` en el directorio de tu proyecto y agrega lo siguiente:
```js
// Importar Express
const express = require('express');
// Importar CORS
const cors = require('cors');
// Crear una instancia de Express
const app = express();
// Definir el puerto en el que se ejecutará el servidor
const PORT = 3000;
// Middleware para poder recibir datos JSON
app.use(express.json());
// Rutas RESTful
// Ruta GET: Retorna todos los usuarios
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
```
### Explicación de las rutas:
1. **GET `/api/usuarios`**: Devuelve un listado de usuarios en formato JSON.
2. **POST `/api/usuarios`**: Recibe datos JSON en el cuerpo de la solicitud y los procesa para crear un nuevo usuario.
3. **PUT `/api/usuarios/:id`**: Actualiza un usuario basado en el `id` proporcionado en la URL.
4. **DELETE `/api/usuarios/:id`**: Elimina un usuario basado en el `id` proporcionado en la URL.
## Paso 4: Ejecutar el Servidor
Ejecuta el servidor usando el siguiente comando:
```bash
node server.js
```
El servidor se iniciará en el puerto `3000`. Puedes probar las rutas utilizando herramientas como **Postman** o **curl**.
## Paso 5: Crear la Página `index.html` con Interacción API
Ahora, vamos a crear una página `index.html` que interactúe con las rutas de nuestro servidor.
1. **Crea el archivo `index.html`** en la misma carpeta de tu proyecto:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API RESTful con Node.js</title>
</head>
<body>
    <h1>Interacción con el API</h1>
    <button onclick="getUsuarios()">Obtener Usuarios</button>
    <button onclick="crearUsuario()">Crear Usuario</button>
    <button onclick="actualizarUsuario()">Actualizar Usuario</button>
    <button onclick="eliminarUsuario()">Eliminar Usuario</button>
    <div id="usuarios"></div>
    <script>
        // Función para obtener los usuarios
        function getUsuarios() {
            fetch('http://localhost:3000/api/usuarios')
                .then(response => response.json())
                .then(data => {
                    const usuariosDiv = document.getElementById('usuarios');
                    usuariosDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
                });
        }
        // Función para crear un nuevo usuario
        function crearUsuario() {
            const usuario = { id: 3, nombre: 'Carlos' };
            fetch('http://localhost:3000/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario)
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
        }
        // Función para actualizar un usuario
        function actualizarUsuario() {
            const usuario = { nombre: 'Juanito' };
            fetch('http://localhost:3000/api/usuarios/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario)
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
        }
        // Función para eliminar un usuario
        function eliminarUsuario() {
            fetch('http://localhost:3000/api/usuarios/2', {
                method: 'DELETE'
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
        }
    </script>
</body>
</html>
```
### Explicación del código:
- **Botones**: Cada uno de los botones está vinculado a una función JavaScript que hace una petición a uno de los endpoints del servidor.
  - `getUsuarios()`: Llama al `GET` y muestra los usuarios.
  - `crearUsuario()`: Llama al `POST` para crear un nuevo usuario.
  - `actualizarUsuario()`: Llama al `PUT` para actualizar un usuario existente.
  - `eliminarUsuario()`: Llama al `DELETE` para eliminar un usuario.
## Paso 6: Probar la Aplicación
1. **Inicia el servidor** (`node server.js`).
2. Abre el archivo `index.html` en tu navegador.
3. Haz clic en los botones para interactuar con el servidor y ver las respuestas.
---
## Resumen de Rutas API RESTful
| Método  | Ruta                          | Descripción                                          |
|---------|--------------------------------|------------------------------------------------------|
| `GET`   | `/api/usuarios`                | Obtener todos los usuarios.                         |
| `POST`  | `/api/usuarios`                | Crear un nuevo usuario.                             |
| `PUT`   | `/api/usuarios/:id`            | Actualizar un usuario por ID.                       |
| `DELETE`| `/api/usuarios/:id`            | Eliminar un usuario por ID.                         |
---
### Enlaces de interés
[¿Qué es una RestfulAPI?](https://www.youtube.com/watch?v=JD6VNRdGl98)
[¿Qué es Express?](https://www.youtube.com/watch?v=OMzOK7V0k3Q)
[Tutorial de REST-API con Python](https://www.youtube.com/watch?v=GMppyAPbLYk)