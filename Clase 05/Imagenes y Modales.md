Aquí tienes la clase sobre **Imágenes y el uso de Modales** en Markdown:

---

## **Clase: Uso de Imágenes y Modales en HTML y CSS**

### **¿Qué son las Imágenes en HTML?**
Las imágenes en HTML se insertan utilizando la etiqueta `<img>`. Esta etiqueta permite mostrar imágenes de diferentes formatos como JPEG, PNG, GIF, entre otros, dentro de una página web. También es posible agregar texto alternativo utilizando el atributo `alt` para mejorar la accesibilidad.

---

### **Etiqueta `<img>`**

#### **Sintaxis Básica**

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

#### **Atributos Comunes**

- **`src`**: Especifica la ruta del archivo de imagen.
- **`alt`**: Proporciona una descripción de la imagen, útil para accesibilidad y SEO.
- **`width` y `height`**: Definen el tamaño de la imagen en píxeles.
- **`title`**: Muestra un texto emergente cuando el usuario pasa el cursor sobre la imagen.
- **`loading`**: Especifica el tipo de carga de la imagen. Los valores pueden ser `lazy` (carga diferida) o `eager` (carga inmediata).

#### **Ejemplo Básico**

```html
<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200" />
```

#### **Ejemplo de imagen con carga diferida**

```html
<img src="imagen.jpg" alt="Descripción de la imagen" loading="lazy" />
```

---

### **Uso de Imágenes como Enlaces**

Puedes hacer que una imagen sea un enlace utilizando la etiqueta `<a>` alrededor de la etiqueta `<img>`. Esto es útil para navegar a otras páginas al hacer clic en una imagen.

#### **Ejemplo de Imagen como Enlace**

```html
<a href="https://www.ejemplo.com">
  <img src="logo.jpg" alt="Logo de ejemplo" />
</a>
```

---

### **¿Qué es un Modal?**
Un **modal** es una ventana emergente que aparece sobre el contenido de la página, generalmente utilizada para mostrar información adicional o formularios sin navegar a otra página. Los modales son interactivos y se pueden cerrar, generalmente, haciendo clic fuera de la ventana emergente o con un botón de cierre.

---

### **Creación de un Modal**

#### **HTML para un Modal**

```html
<!-- Botón para abrir el modal -->
<button id="openModal">Abrir Modal</button>

<!-- Estructura del modal -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <h2>Este es un Modal</h2>
    <p>Más información dentro del modal.</p>
  </div>
</div>
```

#### **CSS para el Modal**

```css
/* Estilo básico para el modal */
.modal {
  display: none; /* Inicialmente oculto */
  position: fixed;
  z-index: 1; /* Se coloca encima de todo */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Fondo oscuro semitransparente */
}

/* Estilo del contenido del modal */
.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
}

/* Estilo del botón de cierre */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
```

#### **JavaScript para abrir y cerrar el Modal**

```javascript
// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModal");

// Obtener el <span> que cierra el modal
var span = document.getElementById("closeModal");

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
```