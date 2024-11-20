let frutas = {
    manzana: {
        color: ['rojo', 'amarillo', 'verde'],
        elementoCaracteristico: 'viene en bolsita',
        sabor: 'Fresco y lleno de azúcar'
    },
    mandarina: {
        color: ['naranja'],
        elementoCaracteristico: 'se puede pelar con facilidad',
        sabor: 'Dulce y ligeramente ácido'
    },
    mango: {
        color: ['amarillo', 'naranja', 'rojo', 'verde'],
        elementoCaracteristico: 'tiene un hueso grande en el centro',
        sabor: 'Dulce y tropical'
    },
    platano: {
        color: ['amarillo', 'verde'],
        elementoCaracteristico: 'viene con una cáscara que se puede pelar',
        sabor: 'Dulce y cremoso'
    },
    mamey: {
        color: ['marrón', 'naranja'],
        elementoCaracteristico: 'pulpa suave y hueso brillante',
        sabor: 'Dulce con notas de miel'
    }
};

// console.log(frutas)

let identificadorFrutas = document.getElementById('frutas')
let keys = Object.keys(frutas)

// ['manzana', 'mandarina', 'mango', 'platano', 'mamey']

for(let i = 0; i < keys.length; i++){
    let hijo = document.createElement('div')
    hijo.innerText = keys[i] + JSON.stringify(frutas[keys[i]])
    identificadorFrutas.appendChild(hijo)
}
