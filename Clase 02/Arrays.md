# Introducción a Arrays en JavaScript

En JavaScript, un **array** (o **arreglo**) es una estructura de datos que permite almacenar una lista de elementos en una sola variable. Los arrays son útiles para almacenar colecciones de datos relacionados y ofrecen una variedad de métodos para manipular estos datos de forma eficiente.

## Creación de un Array

Puedes crear un array en JavaScript utilizando la sintaxis de corchetes `[]` o el constructor `Array`:

```javascript
// Crear un array vacío
let miArray = [];

// Crear un array con elementos
let numeros = [1, 2, 3, 4, 5];

// Crear un array con diferentes tipos de datos
let mezcla = [1, "Hola", true, null];
```

## Acceso a Elementos

Cada elemento en un array tiene un **índice**. Los índices en JavaScript comienzan en `0`, es decir, el primer elemento está en el índice `0`, el segundo en `1`, y así sucesivamente.

```javascript
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // "manzana"
console.log(frutas[2]); // "naranja"
```

## Métodos y Operaciones Comunes con Arrays

Aquí se presentan algunas operaciones básicas que puedes realizar con arrays.

### 1. **Agregar Elementos**

- **`push`**: Agrega un elemento al final del array.
- **`unshift`**: Agrega un elemento al inicio del array.

```javascript
let numeros = [1, 2, 3];
numeros.push(4); // [1, 2, 3, 4]
numeros.unshift(0); // [0, 1, 2, 3, 4]
```

### 2. **Eliminar Elementos**

- **`pop`**: Elimina el último elemento del array.
- **`shift`**: Elimina el primer elemento del array.

```javascript
let numeros = [1, 2, 3, 4];
numeros.pop(); // [1, 2, 3]
numeros.shift(); // [2, 3]
```

### 3. **Acceder a Elementos**

- **`indexOf`**: Encuentra el índice de un elemento.
- **`includes`**: Verifica si un elemento existe en el array.

```javascript
let frutas = ["manzana", "banana", "naranja"];
frutas.indexOf("banana"); // 1
frutas.includes("fresa"); // false
```

### 4. **Remover o Reemplazar Elementos**

- **`splice`**: Remueve o reemplaza elementos en un array.

```javascript
let frutas = ["manzana", "banana", "naranja"];
frutas.splice(1, 1); // ["manzana", "naranja"]
frutas.splice(1, 0, "fresa"); // ["manzana", "fresa", "naranja"]
```

### 5. **Combinar Arrays**

- **`concat`**: Combina dos o más arrays en uno nuevo.

```javascript
let array1 = [1, 2];
let array2 = [3, 4];
let combinado = array1.concat(array2); // [1, 2, 3, 4]
```

### 6. **Ordenar Elementos**

- **`sort`**: Ordena los elementos de un array (alfabéticamente por defecto).
- **`reverse`**: Invierte el orden de los elementos.

```javascript
let letras = ["b", "a", "c"];
letras.sort(); // ["a", "b", "c"]
letras.reverse(); // ["c", "b", "a"]
```

### 7. **Transformar Arrays**

- **`map`**: Aplica una función a cada elemento del array y devuelve uno nuevo.
- **`filter`**: Filtra elementos que cumplen con una condición.
- **`reduce`**: Acumula valores en un solo resultado.

```javascript
let numeros = [1, 2, 3, 4];

// Map
let dobles = numeros.map(num => num * 2); // [2, 4, 6, 8]

// Filter
let pares = numeros.filter(num => num % 2 === 0); // [2, 4]

// Reduce
let suma = numeros.reduce((total, num) => total + num, 0); // 10
```

### 8. **Desestructuración de Arrays**

Puedes extraer elementos de un array y asignarlos a variables de una sola vez.

```javascript
let colores = ["rojo", "verde", "azul"];
let [primero, segundo] = colores;
console.log(primero); // "rojo"
```

## Ejercicios de Arrays

1. Crea un array de nombres y muestra el tercer nombre en la consola.
2. Añade un nombre al inicio y otro al final del array de nombres.
3. Crea un array de números e imprime solo los números impares.
4. Combina dos arrays de frutas y elimina las frutas duplicadas.
5. Ordena un array de números de mayor a menor.
6. Usa `map` para duplicar los valores en un array de números.
7. Crea un array de edades y usa `filter` para encontrar las mayores de 18.
8. Usa `reduce` para encontrar el total de puntos en un array de puntajes.
9. Remueve el primer y último elemento de un array de colores.
10. Verifica si el array de números contiene el número 10.

[Codewars - Mejora tus habilidades de programación](https://www.codewars.com/)
