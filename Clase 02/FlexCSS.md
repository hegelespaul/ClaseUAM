# Introducción a CSS Flexbox

CSS **Flexbox** (Flexible Box) es un sistema de diseño unidimensional que permite crear estructuras flexibles y adaptativas en una página web. Con Flexbox, puedes alinear elementos de manera horizontal o vertical, distribuir espacio entre ellos y hacer que respondan al tamaño de la pantalla.

## Estructura Básica

Para utilizar Flexbox, se define un contenedor flexible asignando la propiedad `display: flex;` a un contenedor principal. Los elementos hijos dentro de este contenedor se disponen en una línea flexible, ya sea en **fila** o **columna**, según se especifique.

```html
<div class="flex-container">
  <div class="flex-item">Elemento 1</div>
  <div class="flex-item">Elemento 2</div>
  <div class="flex-item">Elemento 3</div>
</div>
```

```css
.flex-container {
  display: flex;
}
```

## Propiedades de Flexbox

### 1. `flex-direction`
Define la **dirección** en la que los elementos hijos se organizan dentro del contenedor.

- **row**: dirección horizontal (por defecto).
- **row-reverse**: dirección horizontal, pero en orden inverso.
- **column**: dirección vertical.
- **column-reverse**: dirección vertical, pero en orden inverso.

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Alternativas: row-reverse, column, column-reverse */
}
```

### 2. `justify-content`
Controla el **espacio horizontal** entre los elementos en el contenedor.

- **flex-start**: los elementos se alinean al inicio del contenedor.
- **flex-end**: los elementos se alinean al final.
- **center**: los elementos se centran.
- **space-between**: espacio igual entre los elementos.
- **space-around**: espacio igual entre los elementos y alrededor.

```css
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

### 3. `align-items`
Define la **alineación vertical** de los elementos dentro del contenedor (cuando `flex-direction: row`).

- **flex-start**: los elementos se alinean al inicio.
- **flex-end**: los elementos se alinean al final.
- **center**: los elementos se centran verticalmente.
- **baseline**: alineación basada en el texto.
- **stretch**: los elementos se estiran para llenar el contenedor.

```css
.flex-container {
  display: flex;
  align-items: center;
}
```

### 4. `flex-wrap`
Controla si los elementos **envuelven** o se mantienen en una sola línea.

- **nowrap**: los elementos permanecen en una línea (por defecto).
- **wrap**: los elementos se envuelven a la siguiente línea.
- **wrap-reverse**: los elementos se envuelven a la línea anterior.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

### 5. `align-content`
Ajusta la **alineación del contenido** cuando hay varias filas en el contenedor.

- **flex-start**: todas las filas se alinean al inicio.
- **flex-end**: todas las filas se alinean al final.
- **center**: las filas se centran en el contenedor.
- **space-between**: espacio igual entre filas.
- **space-around**: espacio alrededor de las filas.
- **stretch**: las filas se estiran para llenar el espacio vertical.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

### 6. `flex` (para elementos hijos)
Especifica cómo un **elemento individual** dentro del contenedor flexible debe crecer o encogerse. Este es un atajo de tres propiedades: `flex-grow`, `flex-shrink` y `flex-basis`.

```css
.flex-item {
  flex: 1; /* Los elementos ocuparán el mismo espacio */
}
```

### 7. `order`
Permite cambiar el **orden** de los elementos en el contenedor sin modificar el HTML.

```css
.flex-item:nth-child(1) {
  order: 2;
}
.flex-item:nth-child(2) {
  order: 1;
}
```

## Ejemplos Prácticos

### Ejemplo 1: Alineación de Elementos en una Fila

```html
<div class="menu">
  <div class="item">Inicio</div>
  <div class="item">Servicios</div>
  <div class="item">Contacto</div>
</div>
```

```css
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
```

### Ejemplo 2: Flex con `flex-wrap`

```html
<div class="galeria">
  <div class="foto">Foto 1</div>
  <div class="foto">Foto 2</div>
  <div class="foto">Foto 3</div>
  <div class="foto">Foto 4</div>
</div>
```

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.foto {
  width: 48%;
  background-color: lightblue;
  margin: 5px;
}
```

### Ejemplo 3: Diseño de Tarjetas

```html
<div class="tarjetas">
  <div class="tarjeta">Tarjeta 1</div>
  <div class="tarjeta">Tarjeta 2</div>
  <div class="tarjeta">Tarjeta 3</div>
</div>
```

```css
.tarjetas {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.tarjeta {
  flex: 1;
  background-color: lightcoral;
  margin: 10px;
  padding: 20px;
  text-align: center;
}
```

[Flexbox Froggy - Aprende Flexbox jugando](https://flexboxfroggy.com/#es)
