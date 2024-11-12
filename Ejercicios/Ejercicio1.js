console.log("Hola");

let miPrimerArray = [];
console.log(miPrimerArray);

miPrimerArray.push([5, 6, 7, 8]);
console.log(miPrimerArray);

miPrimerArray.unshift([1, 2, 3, 4]);
console.log(miPrimerArray);

console.log(miPrimerArray[0], miPrimerArray[1]);

//1. Crea un array de nombres y muestra el tercer nombre en la consola.

let nombres = ['Roberto', 'Laura', 'Pikachú'];
console.log(nombres[2]);

//2. Añade un nombre al inicio y otro al final del array de nombres.

nombres.push('Mirno');
nombres.unshift('Pocoyó');
console.log(nombres);

//3. Crea un array de números e imprime solo los números impares.

let nombresImpares = nombres.filter(nombre => (nombres.indexOf(nombre) + 1) % 2 !== 0);
console.log(nombresImpares);

//4. Combina dos arrays de frutas y elimina las frutas duplicadas.

let frutas1 = ['Pera', 'Manzana', 'Uvas', 'Plátano'];
let frutas2 = ['Pera', 'Naranja', 'Moras', 'Plátano'];

let frutasCombinado = frutas1.concat(frutas2);
let frutasCombinadoFiltrado = frutasCombinado.filter((item, pos) => frutasCombinado.indexOf(item) == pos);
console.log(frutasCombinadoFiltrado);

//5. Ordena un array de números de mayor a menor.

let numeros = [0, 5, 3, 8, 7, 9, 2, 1, 4, 6];
numeros = numeros.sort();
console.log(numeros);

//6. Usa `map` para duplicar los valores en un array de números.

let numerosDucplicados = numeros.map(num => num * 2);
console.log(numerosDucplicados);

//7. Crea un array de edades y usa `filter` para encontrar las mayores de 18.

let edades = [15, 17, 21, 27, 10, 5, 8];
let edadesFiltradas = edades.filter(edad => edad > 18);
console.log(edadesFiltradas);

//8. Usa `reduce` para encontrar el total de puntos en un array de puntajes.

let puntajes = [10, 9, 7, 6.5, 2, 1, 0, 10, 10];
let sumaPuntajes = puntajes.reduce((total, num) => total + num, 0);
console.log(sumaPuntajes);

//9. Remueve el primer y último elemento de un array de colores.
let colores = ['rojo', 'blanco', 'azul', 'lila'];
colores.splice(2, 1); 
colores.splice(0, 1); 
console.log(colores); 

//10. Verifica si el array de números contiene el número 10.
console.log(numeros.includes(10))
console.log(numerosDucplicados.includes(10))
