# Introducción a la Programación Web

La programación web consiste en el desarrollo de sitios y aplicaciones que funcionan en navegadores, permitiendo a los usuarios interactuar con contenido en línea. Los tres lenguajes fundamentales para crear una página web son **HTML**, **CSS** y **JavaScript**:

- **HTML** (HyperText Markup Language): define la estructura y el contenido de la página.
- **CSS** (Cascading Style Sheets): maneja el diseño visual y el estilo de la página.
- **JavaScript** (JS): añade interactividad y permite realizar operaciones dinámicas.

A continuación, te explicamos cómo funcionan estos lenguajes y cómo crear una página web básica utilizando HTML, CSS y JavaScript.

## ¿Cómo funciona la Programación Web?

Cuando visitas una página web, el navegador solicita archivos (HTML, CSS, JS) del servidor web y los utiliza para renderizar la página que ves. La interacción entre el navegador y estos archivos se conoce como **front-end**, y permite:
1. **Definir la estructura** del contenido mediante HTML.
2. **Aplicar estilos visuales** para hacer que el sitio sea atractivo usando CSS.
3. **Agregar interactividad y lógica** para que el sitio responda a las acciones del usuario mediante JavaScript.

## Crear una Página Web Básica

A continuación, te mostramos cómo crear una página web sencilla con los tres elementos principales: HTML, CSS y JavaScript.

### Paso 1: HTML - Estructura de la Página

Crea un archivo llamado `index.html` y define la estructura básica de la página. Este archivo contiene el contenido que los usuarios verán, como texto, imágenes y enlaces.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Bienvenido a Mi Página Web</h1>
    </header>
    <section>
        <p>¡Hola! Esta es una página web básica creada con HTML, CSS y JavaScript.</p>
        <button onclick="mostrarMensaje()">Haz clic aquí</button>
    </section>
    <script src="script.js"></script>
</body>
</html>
```

#### Explicación
- **`<!DOCTYPE html>`**: Indica al navegador que estamos utilizando HTML5.
- **`<html lang="es">`**: Define el idioma de la página como español.
- **`<head>`**: Contiene meta-información sobre la página (como título y enlaces a CSS o JS).
- **`<body>`**: Contiene el contenido visible de la página, como encabezados (`<h1>`), texto (`<p>`), y botones (`<button>`).

### Paso 2: CSS - Estilos y Diseño

Crea un archivo llamado `styles.css` para darle estilo a tu página. Aquí defines el color, el tamaño de los textos y el diseño general.

```css
/* styles.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #0073e6;
    color: white;
    padding: 1rem;
    text-align: center;
}

section {
    padding: 2rem;
}

button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #005bb5;
}
```

#### Explicación
- **`body`**: Establece el color de fondo y los estilos básicos para el texto en toda la página.
- **`header`**: Añade estilo al encabezado, como color de fondo, color de texto y centrado.
- **`button` y `button:hover`**: Define el diseño del botón y su apariencia al pasar el cursor por encima.

### Paso 3: JavaScript - Interactividad

Crea un archivo llamado `script.js` para agregar interactividad a la página. Este archivo permite que el botón ejecute una función que muestra un mensaje en la consola.

```javascript
// script.js

function mostrarMensaje() {
    alert("¡Hola! Has hecho clic en el botón.");
}
```

#### Explicación
- **`function mostrarMensaje()`**: Define una función llamada `mostrarMensaje` que muestra una alerta cuando se hace clic en el botón.

## Resumen del Proyecto

Para probar tu página, asegúrate de que todos los archivos (`index.html`, `styles.css`, y `script.js`) estén en la misma carpeta. Abre el archivo `index.html` en un navegador, y verás:
- Un encabezado con el título "Bienvenido a Mi Página Web".
- Un párrafo de texto con un botón.
- Al hacer clic en el botón, aparecerá un mensaje de alerta.

## Más Recursos

Si quieres aprender más sobre programación web, aquí tienes algunos recursos útiles:
- [Documentación de HTML en MDN](https://developer.mozilla.org/es/docs/Web/HTML)
- [Documentación de CSS en MDN](https://developer.mozilla.org/es/docs/Web/CSS)
- [Documentación de JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript)
