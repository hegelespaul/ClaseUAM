const equis = 'https://cdn-icons-png.flaticon.com/512/109/109602.png';
const circulo = 'https://cdn-icons-png.flaticon.com/512/319/319248.png';
const casillas = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function updateCasilla(casilla, imgSrc, clase) {
    casilla.innerHTML = `<img src="${imgSrc}" />`;
    casilla.classList.replace('vacia', 'ocupada');
    casilla.classList.add(clase);
}

function clickCasilla(casillaId) {
    const casilla = document.getElementById(casillaId);
    if (casilla.classList.contains('vacia')) {
        updateCasilla(casilla, circulo, 'circulo');
        comprobarJuego();
        llenarCasillaAutomaticamente();
    } else {
        alert('Casilla Ocupada!');
    }
}

function llenarCasillaAutomaticamente() {
    const vacias = casillas.filter(id => document.getElementById(id).classList.contains('vacia'));
    const randomCasilla = document.getElementById(vacias[getRandomInt(0, vacias.length)]);
    updateCasilla(randomCasilla, equis, 'equis');
    comprobarJuego();
}

function comprobarJuego() {
    const circulos = casillas.filter(id => document.getElementById(id).classList.contains('circulo'));
    const equises = casillas.filter(id => document.getElementById(id).classList.contains('equis'));

    const triunfos = [
        ['uno', 'dos', 'tres'],
        ['cuatro', 'cinco', 'seis'],
        ['siete', 'ocho', 'nueve'],
        ['uno', 'cuatro', 'siete'],
        ['dos', 'cinco', 'ocho'],
        ['tres', 'seis', 'nueve'],
        ['uno', 'cinco', 'nueve'],
        ['tres', 'cinco', 'siete']
    ];

    triunfos.forEach(triunfo => {
        if (triunfo.every(casilla => circulos.includes(casilla))) {
            document.getElementById('resultado').innerText = 'Ganó Círculo!';
            drawLine(triunfo);
            disableClicks();
        }
        if (triunfo.every(casilla => equises.includes(casilla))) {
            document.getElementById('resultado').innerText = 'Ganó Tache!';
            drawLine(triunfo);
            disableClicks();
        }
    });
}

function disableClicks() {
    casillas.forEach(id => {
        const casilla = document.getElementById(id);
        casilla.style.pointerEvents = 'none';
        casilla.style.cursor = 'not-allowed';
    });
}

function drawLine(divIds) {
    const centers = divIds.map(id => {
        const div = document.querySelector(`#${id}`);
        const rect = div.getBoundingClientRect();
        return { x: rect.x - rect.width, y: rect.y-10 };
    });

    centers.forEach((center, i) => {
        if (i === 0) return; // Skip the first point
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('stroke', 'red');
        line.setAttribute('stroke-width', '12');
        line.setAttribute('x1', centers[i - 1].x);
        line.setAttribute('y1', centers[i - 1].y);
        line.setAttribute('x2', center.x);
        line.setAttribute('y2', center.y);
        document.querySelector('svg').appendChild(line);
    });
    document.querySelector('svg').style.zIndex = '1';
}

document.getElementById('Button').addEventListener('click', () => location.reload());
