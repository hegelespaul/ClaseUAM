# Bucles en JavaScript: `for`, `forEach` e Iteración de Strings

## 1. `for` Loop

El bucle `for` es uno de los más utilizados en JavaScript. Se emplea cuando conocemos el número exacto de iteraciones necesarias. Su estructura básica es:

```javascript
for (inicialización; condición; actualización) {
    // Código a ejecutar en cada iteración
}
```

### Ejemplo:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
}
// Salida: Iteración número 0, Iteración número 1, ..., Iteración número 4
```

### Desglose:
- **Inicialización**: Se ejecuta una vez al comienzo del bucle. Generalmente es donde se declara el contador (`let i = 0`).
- **Condición**: Se evalúa antes de cada iteración. Si es `true`, el bucle continúa; si es `false`, el bucle se detiene.
- **Actualización**: Se ejecuta al final de cada iteración. Generalmente se incrementa o decrementa el contador.

## 2. `forEach` Loop

`forEach` es un método de arrays en JavaScript que permite ejecutar una función para cada elemento de un array. Es especialmente útil cuando queremos iterar sobre todos los elementos de un array sin preocuparnos del índice.

```javascript
array.forEach(function(elemento, índice, array) {
    // Código a ejecutar con cada elemento
});
```

### Ejemplo:

```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log("Número: " + numero);
});
// Salida: Número: 1, Número: 2, ..., Número: 5
```

### Con Arrow Function

```javascript
numeros.forEach(numero => console.log("Número: " + numero));
```

### Desglose:
- **Elemento**: Representa el elemento actual en la iteración.
- **Índice** (opcional): Índice del elemento en el array.
- **Array** (opcional): El array completo que se está iterando.

**Nota:** A diferencia del bucle `for`, `forEach` no permite el uso de `break` o `continue` para detener o saltar una iteración.

## 3. Iteración de Strings

En JavaScript, los strings pueden tratarse como arrays de caracteres. Esto significa que podemos iterar sobre ellos usando un bucle `for` o `forEach`.

### Iteración con `for` Loop

```javascript
const texto = "Hola";
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}
// Salida: H, o, l, a
```

### Iteración con `for...of`

`for...of` es una alternativa más elegante y clara para iterar sobre los caracteres de un string.

```javascript
for (const char of texto) {
    console.log(char);
}
// Salida: H, o, l, a
```

### Iteración con `forEach`

Aunque `forEach` es un método exclusivo de arrays, podemos convertir un string a un array de caracteres utilizando `split('')` para emplearlo en strings.

```javascript
texto.split('').forEach(char => console.log(char));
// Salida: H, o, l, a
```

## Resumen

- **`for`**: Útil para iteraciones controladas por índice.
- **`forEach`**: Ideal para iterar arrays sin modificar el índice.
- **Iteración de Strings**: Podemos usar `for`, `for...of` o `forEach` (con `split`) para iterar sobre cada carácter de un string.

Claro, aquí tienes la lista de ejercicios:

1. Sumar todos los números de un array.
2. Multiplicar todos los números de un array usando `forEach`.
3. Contar cuántas veces aparece la letra "a" en una frase.
4. Invertir un string.
5. Calcular el promedio de un array de números usando `forEach`.
6. Convertir cada carácter de un string en mayúsculas.
7. Crear un nuevo array con el cuadrado de cada número de un array original.
8. Filtrar los números pares de un array en un nuevo array.
9. Contar cuántas palabras contiene una oración.
10. Generar la tabla de multiplicar de un número dado.