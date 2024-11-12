# Ejercicio de Gráfico de Barras Interactivo

En este ejercicio, crearás un gráfico de barras interactivo para visualizar las calificaciones de un grupo de estudiantes. Aprenderás a:
- Usar métodos de arrays en JavaScript para preparar los datos.
- Actualizar dinámicamente un gráfico de barras según la interacción del usuario.
- Filtrar, ordenar y transformar datos para la visualización.

## Empezando

Primero, configura un archivo HTML y JavaScript para mostrar el gráfico. Así es como podría verse la estructura inicial de los archivos:

### `index.html`
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gráfico de Barras Interactivo</title>
  <style>
    .bar { height: 20px; background-color: #4CAF50; margin: 4px 0; }
  </style>
</head>
<body>
  <h1>Calificaciones de Estudiantes</h1>
  <input type="number" id="scoreFilter" placeholder="Calificación mínima">
  <button onclick="filterScores()">Filtrar</button>
  <div id="chart"></div>
  <script src="script.js"></script>
</body>
</html>
```

### `script.js`
Este archivo contendrá el JavaScript para la manipulación de datos y la visualización.

## Paso 1: Configurar los Datos

Comienza con un array de calificaciones de estudiantes.

```javascript
// Datos iniciales: array de calificaciones
let scores = [78, 85, 95, 67, 88, 92, 73, 83, 89, 76];

// Función para renderizar el gráfico
function renderChart(data) {
  const chart = document.getElementById('chart');
  chart.innerHTML = ''; // Limpiar barras anteriores

  data.forEach(score => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${score}%`;
    bar.textContent = `${score}%`;
    chart.appendChild(bar);
  });
}

// Renderizar inicialmente
renderChart(scores);
```

Este código crea un gráfico de barras basado en las calificaciones iniciales. El ancho de cada barra corresponde al porcentaje de la calificación.

## Paso 2: Ordenar las Calificaciones

Para ordenar las calificaciones de menor a mayor o de mayor a menor, usa el método `sort` de JavaScript.

### Ordenar las Calificaciones en Orden Descendente

```javascript
function sortScoresDescending() {
  const sortedScores = [...scores].sort((a, b) => b - a);
  renderChart(sortedScores);
}

// Llama a esta función para ver el gráfico ordenado
sortScoresDescending();
```

Llama a `sortScoresDescending()` para renderizar las calificaciones en orden descendente. También puedes crear un botón en `index.html` para ordenar.

### Botón HTML para Ordenar
Agrega este botón en `index.html`:
```html
<button onclick="sortScoresDescending()">Ordenar Descendente</button>
```

## Paso 3: Filtrar Calificaciones

Para mostrar solo las calificaciones por encima de un cierto umbral, usa el método `filter`.

### Filtrar Calificaciones por Valor Mínimo

```javascript
function filterScores() {
  const minScore = document.getElementById('scoreFilter').value;
  const filteredScores = scores.filter(score => score >= minScore);
  renderChart(filteredScores);
}
```

Este código filtra las calificaciones según el valor de entrada, mostrando solo aquellas por encima del umbral especificado.

### Ejemplo de Uso
1. Introduce una calificación mínima en el campo de entrada.
2. Haz clic en el botón **Filtrar** para actualizar el gráfico.

## Paso 4: Mapear Calificaciones a Porcentajes

Supón que deseas ajustar todas las calificaciones convirtiéndolas a porcentajes basados en un puntaje máximo de 100.

### Mapeo de Calificaciones

```javascript
function mapScoresToPercentages() {
  const percentages = scores.map(score => (score / 100) * 100);
  renderChart(percentages);
}

// Llama a esta función para ver el gráfico con los porcentajes
mapScoresToPercentages();
```

También puedes agregar otro botón para activar esta función.

### Botón HTML para Mapear
Agrega este botón en `index.html`:
```html
<button onclick="mapScoresToPercentages()">Convertir a Porcentajes</button>
```

## Código Completo de `script.js`

Aquí está el código completo de `script.js` con todas las funciones incluidas:

```javascript
let scores = [78, 85, 95, 67, 88, 92, 73, 83, 89, 76];

function renderChart(data) {
  const chart = document.getElementById('chart');
  chart.innerHTML = '';
  
  data.forEach(score => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${score}%`;
    bar.textContent = `${score}%`;
    chart.appendChild(bar);
  });
}

// Renderizado inicial
renderChart(scores);

function sortScoresDescending() {
  const sortedScores = [...scores].sort((a, b) => b - a);
  renderChart(sortedScores);
}

function filterScores() {
  const minScore = document.getElementById('scoreFilter').value;
  const filteredScores = scores.filter(score => score >= minScore);
  renderChart(filteredScores);
}

function mapScoresToPercentages() {
  const percentages = scores.map(score => (score / 100) * 100);
  renderChart(percentages);
}
```

---

### Resumen

- **Métodos de Array Usados**:
  - `sort` para ordenar datos.
  - `filter` para mostrar datos seleccionados.
  - `map` para transformar los datos.
- **Resultado**: Has creado un gráfico de barras interactivo y personalizable que se ajusta según la entrada del usuario.
