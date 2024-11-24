let vln = 'Popocatépetl';

for (i = 0; i < vln.length; i++) {
    console.log(vln[i]);
}

let cosa = ['o', '-', '-', '-', '-', '-', '-', '-', '-']

for (i = 0; i < cosa.length; i++) {

    if (cosa[i] == 'o') {
    }
    else {
        cosa[i] = 'o';
        cosa[i - 1] = '-';
        console.log(cosa);
    }

    let canva = document.getElementById('canva');
    let nuevodiv = document.createElement('div');
    nuevodiv.append(cosa);
    // console.log(nuevodiv);
    canva.appendChild(nuevodiv);
}

//Cuantas veces aparece la letra t en la palabra Popocatépetl


function cuentaT(palabra) {
    let resultado = 0;
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == 't') {
            resultado++;
        }
    }
    return resultado
}

console.log(cuentaT(vln))