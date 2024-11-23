# 📚 Lección: Manejo de Diccionarios en JavaScript

Los **diccionarios** en JavaScript son objetos utilizados para almacenar datos en formato clave-valor. Son extremadamente útiles para organizar y manipular información estructurada. En esta lección, aprenderás cómo:

1. Crear un diccionario.
2. Guardar datos.
3. Modificar valores.
4. Trabajar con claves y valores.
5. Convertir y guardar un diccionario como JSON.

---

## ✨ **1. Creación de un Diccionario**

En JavaScript, los diccionarios se representan como **objetos** (`objects`).

```javascript
// Crear un diccionario vacío
let diccionario = {};

// Crear un diccionario con datos iniciales
let persona = {
  nombre: "Hegel",
  edad: 30,
  ciudad: "Caracas"
};
```

---

## ✨ **2. Guardar Datos en un Diccionario**

Puedes agregar nuevas claves o actualizar valores existentes usando la notación de **punto** o **corchetes**.

```javascript
// Usando la notación de punto
persona.profesión = "Músico";

// Usando la notación de corchetes
persona["instrumento"] = "Guitarra";

console.log(persona);
/*
{
  nombre: "Hegel",
  edad: 30,
  ciudad: "Caracas",
  profesión: "Músico",
  instrumento: "Guitarra"
}
*/
```

---

## ✨ **3. Modificar Valores**

Para modificar un valor, simplemente asigna uno nuevo a la clave correspondiente.

```javascript
persona.edad = 31; // Cambia el valor de 'edad'
persona["ciudad"] = "Maracaibo"; // Cambia el valor de 'ciudad'

console.log(persona);
/*
{
  nombre: "Hegel",
  edad: 31,
  ciudad: "Maracaibo",
  profesión: "Músico",
  instrumento: "Guitarra"
}
*/
```

---

## ✨ **4. Ver las Claves y Valores**

JavaScript proporciona métodos para trabajar con las claves y valores de un diccionario.

### Obtener todas las claves
```javascript
let claves = Object.keys(persona);
console.log(claves); // ["nombre", "edad", "ciudad", "profesión", "instrumento"]
```

### Obtener todos los valores
```javascript
let valores = Object.values(persona);
console.log(valores); // ["Hegel", 31, "Maracaibo", "Músico", "Guitarra"]
```

### Obtener pares clave-valor
```javascript
let entradas = Object.entries(persona);
console.log(entradas);
/*
[
  ["nombre", "Hegel"],
  ["edad", 31],
  ["ciudad", "Maracaibo"],
  ["profesión", "Músico"],
  ["instrumento", "Guitarra"]
]
*/
```

---

## ✨ **5. Guardar un Diccionario como JSON**

El formato **JSON (JavaScript Object Notation)** es ideal para guardar diccionarios en un archivo o transmitirlos entre sistemas.

### Convertir un diccionario a JSON
```javascript
let personaJSON = JSON.stringify(persona);
console.log(personaJSON);
/*
{"nombre":"Hegel","edad":31,"ciudad":"Maracaibo","profesión":"Músico","instrumento":"Guitarra"}
*/
```

### Guardar JSON en un archivo (con Node.js)
```javascript
const fs = require('fs');

fs.writeFileSync('persona.json', personaJSON, 'utf8');
console.log("Archivo guardado como persona.json");
```

### Leer JSON desde un archivo (con Node.js)
```javascript
let datos = fs.readFileSync('persona.json', 'utf8');
let personaDesdeJSON = JSON.parse(datos);

console.log(personaDesdeJSON);
/*
{
  nombre: "Hegel",
  edad: 31,
  ciudad: "Maracaibo",
  profesión: "Músico",
  instrumento: "Guitarra"
}
*/
```

---

## 🎯 **Resumen**

| Acción                      | Código Ejemplo                                 |
|-----------------------------|-----------------------------------------------|
| Crear un diccionario        | `let obj = {};` o `let obj = { clave: valor };` |
| Agregar datos               | `obj.clave = valor;` o `obj["clave"] = valor;` |
| Modificar datos             | `obj.clave = nuevoValor;`                      |
| Ver claves                  | `Object.keys(obj)`                             |
| Ver valores                 | `Object.values(obj)`                           |
| Guardar como JSON           | `JSON.stringify(obj)`                          |
| Leer desde JSON             | `JSON.parse(jsonString)`                       |

¡Felicidades! Ahora tienes las herramientas necesarias para trabajar con diccionarios en JavaScript. 🚀