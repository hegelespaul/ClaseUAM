Claro, aquí tienes solo la clase de **CSS Grid** en Markdown:

---

## **Clase: Introducción a CSS Grid**

### **¿Qué es CSS Grid?**
CSS Grid es un sistema de diseño bidimensional que permite organizar los elementos en una cuadrícula, facilitando la creación de diseños complejos con menos esfuerzo y mayor control. A diferencia de Flexbox, que es principalmente un sistema de diseño unidimensional (solo para filas o solo para columnas), CSS Grid permite crear estructuras en ambas direcciones: filas y columnas.

### **Propiedades Principales de CSS Grid**

1. **`display: grid`**
   Esta propiedad se usa para definir un contenedor como un grid. Todos los elementos hijos dentro de este contenedor serán distribuidos en filas y columnas.
   ```css
   .grid-container {
       display: grid;
   }
   ```

2. **`grid-template-columns`**
   Define las columnas del grid y sus anchos. Puedes usar unidades fijas, porcentajes o fracciones (`fr`) para definir el espacio que cada columna debe ocupar.
   ```css
   .grid-container {
       grid-template-columns: 100px 200px 1fr; /* 3 columnas: 100px, 200px y 1 fracción */
   }
   ```

3. **`grid-template-rows`**
   Similar a `grid-template-columns`, pero para las filas. Permite definir las alturas de las filas en el grid.
   ```css
   .grid-container {
       grid-template-rows: 100px auto; /* 2 filas: una de 100px y otra con altura automática */
   }
   ```

4. **`grid-gap` o `gap`**
   Define el espacio entre las filas y columnas. Puedes especificar un valor de espacio para ambos (filas y columnas) o valores separados para cada uno.
   ```css
   .grid-container {
       gap: 10px; /* Espacio de 10px entre las filas y columnas */
   }
   ```

5. **`grid-template-areas`**
   Esta propiedad permite asignar nombres a las áreas del grid. Es útil para crear estructuras más intuitivas y legibles al distribuir los elementos.
   ```css
   .grid-container {
       grid-template-areas:
           "header header header"
           "sidebar main main"
           "footer footer footer";
   }
   ```

6. **`grid-column` y `grid-row`**
   Estas propiedades permiten que un elemento del grid ocupe varias columnas o filas. Puedes especificar en qué fila o columna empezar y cuántas cubrirá.
   ```css
   .item {
       grid-column: span 2; /* Ocupa dos columnas */
   }
   ```

### **Ejemplo de Uso de CSS Grid**

```html
<div class="grid-container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
</div>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual tamaño */
    gap: 10px; /* Espacio entre elementos */
}

.item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}
</style>
```

### **Explicación del Ejemplo:**
- El contenedor `.grid-container` tiene 3 columnas (`grid-template-columns: repeat(3, 1fr)`), lo que significa que se crean 3 columnas de tamaño flexible.
- El `gap: 10px` crea un espacio de 10px entre cada elemento.
- Los elementos `.item` dentro del contenedor se distribuyen automáticamente en el grid. Tienen un fondo azul claro y texto centrado.