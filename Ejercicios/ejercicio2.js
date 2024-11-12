//Suma de Dos Números: Escribe una función llamada suma que tome dos números como parámetros y devuelva su suma.

function suma(a, b) {
    let resultado = a + b;
    return resultado;
};

console.log(suma(75,93));

//Verificación de Número Par: Escribe una función llamada esPar que tome un número entero como parámetro y devuelva true si el número es par y false si es impar.

function esPar(numero) {
    let resultado;
    if (numero % 2 === 0) {
        resultado = true;
    } else {
        resultado = false;
    };
    return resultado;
}

console.log(esPar(96));

//Saludo Personalizado: Escribe una función llamada saludar que tome un nombre como parámetro y devuelva un saludo personalizado.

function saludar(nombre) {
    return 'Que onda ' + nombre + ', saca **emoji de perro**.';
}

console.log(saludar('Brandon'));

//Calcular el Doble de un Número: Escribe una función llamada doble que tome un número como parámetro y devuelva el doble de ese número.

function doble(numero) {
    return numero * 2;
}

console.log(doble(1234567890));

//Convertir Grados Celsius a Fahrenheit: Escribe una función llamada celsiusAFahrenheit que tome un número en grados Celsius y lo convierta a Fahrenheit.

function celsiusAFahrenheit(gradosCelcius){
    let gradosFahrenheit = (gradosCelcius * 9/5) + 32;
    return gradosFahrenheit;
}

console.log(celsiusAFahrenheit(-1))

