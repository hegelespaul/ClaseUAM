const texto = [
    "Esto no es una pieza artística, mucho menos una obra de arte. Acá se presenta un ejercicio de supervivencia,",
    "un intento de atrapar la esencia fugaz de un momento de incertidumbre.",
    "No hay pretensiones de belleza ni de originalidad; no se busca adornar la realidad ni embellecer la crudeza de la experiencia.",
    "Aquí se encuentra, en su forma más desnuda, el registro de lo que significa resistir cuando todo alrededor parece diseñado para desmoronarse.",
    "Este texto es el testimonio de una búsqueda constante en medio del caos, una lucha por darle sentido a lo incomprensible,",
    "por encontrar un punto de apoyo en un terreno inestable.",
    "Es el esfuerzo de transformar la confusión en palabras, de convertir los fragmentos de un tiempo roto en algo mínimamente coherente, aunque solo sea para uno mismo.",
    "Cada palabra escrita es un acto de supervivencia en sí misma.",
    "Es una afirmación de la existencia en medio de lo efímero, una declaración de que uno ha estado aquí, de que ha sentido, pensado y resistido.",
    "No se trata de crear algo duradero ni de dejar una huella en el tiempo; se trata simplemente de ser,",
    "de aferrarse a algo cuando todo parece destinado a desvanecerse.",
    "Las frases son anclas, pequeñas islas de estabilidad en un mar de incertidumbre.",
    "Y aunque el resultado carezca de la perfección y estructura de una obra artística,",
    "en cada palabra se encuentra un esfuerzo genuino por entender, por resistir, por no dejarse arrastrar por la marea de la desesperanza.",
    "Aquí no se busca la aprobación de un público ni el reconocimiento de un lector.",
    "Este es un acto íntimo, casi secreto, que no necesita de los aplausos ni de los elogios para justificar su existencia.",
    "Es una conversación consigo mismo, una introspección que se niega a ser censurada, a ser suavizada.",
    "Los pensamientos que aquí se despliegan no buscan complacer; son honestos, crudos, incómodos, pero necesarios.",
    "Son los pensamientos que surgen en la soledad, cuando uno se enfrenta a sus propios temores, a sus propios límites.",
    "Escribir este texto es, en cierto modo, una forma de liberar lo que se lleva dentro, de sacudir el peso que se acumula en el alma.",
    "No es un proceso agradable ni liberador en el sentido convencional; es una exploración de las sombras, una inmersión en lo que se prefiere evitar.",
    "Pero a veces es necesario descender a las profundidades para comprender realmente lo que yace en la superficie.",
    "Cada línea es un recordatorio de que, incluso en los momentos más oscuros, uno tiene la capacidad de crear algo,",
    "aunque sea solo una colección de palabras.",
    "Incluso en medio de la adversidad, existe la posibilidad de construir, de reconstruir, de dar forma a lo informe.",
    "Y aunque el resultado final sea incompleto, imperfecto, refleja la autenticidad de la experiencia vivida.",
    "Este no es un texto para ser admirado ni para ser analizado; es un refugio,",
    "un espacio en el que uno puede reconocerse y verse reflejado en toda su vulnerabilidad.",
    "Es un lugar en el que la fragilidad humana no es algo que deba ocultarse,",
    "sino que se muestra abiertamente, con todas sus imperfecciones y contradicciones.",
    "A fin de cuentas, este texto es un acto de resistencia, una forma de no rendirse ante el vacío,",
    "de no dejar que el dolor y la incertidumbre consuman completamente el espíritu.",
    "Es un recordatorio de que, incluso cuando todo parece perdido, hay algo dentro de nosotros que lucha por seguir adelante,",
    "que se niega a desaparecer sin dejar rastro.",
    "En la superficie, puede parecer solo un conjunto de palabras, de frases inconexas, de ideas que oscilan entre la claridad y la confusión.",
    "Pero en lo profundo, este es un grito de existencia, una afirmación de que, a pesar de todo, uno sigue aquí,",
    "presente, sintiendo, experimentando, enfrentando la vida en toda su complejidad."
];

let elem = document.documentElement;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[getRandomInt(0, 16)];
    }
    return color;
}

function getRandomFontSize() {
    return getRandomInt(12, 36) + "px"; 
}

function getRandomFontFamily() {
    const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Tahoma'];
    return fonts[getRandomInt(0, fonts.length)];
}

function getRandomBackgroundColor() {
    const backgrounds = ['#FFFF00', '#FF6347', '#90EE90', '#ADD8E6', '#F0E68C'];
    return backgrounds[getRandomInt(0, backgrounds.length)];
}

function creaTexto() {
    let area = document.getElementById('texto');
    let frases = texto; 
    let frase = frases[getRandomInt(0, frases.length)];
    let indice = 0; 
    function anadir() {
        if (indice < frase.length) {
            let span = document.createElement('span');
            span.textContent = frase[indice];
            span.style.fontSize = getRandomFontSize();
            span.style.fontFamily = getRandomFontFamily();
            span.style.color = getRandomColor();
            span.style.backgroundColor = getRandomBackgroundColor();
            span.style.margin = '0 2px';
            area.appendChild(span);
            indice++;
            setTimeout(anadir, 10); 
        } else {
            setTimeout(creaTexto, 10);
        }
    }
    anadir();
}

function applyZoom() {
    let escala = getRandomFloat(0.01,10);
    document.body.style.transform = 'scale(' + escala.toString() + ')';
    document.body.style.transformOrigin = '0 0';
    document.body.style.width = '100vw';
}

window.onload = function() {
    applyZoom();
};

creaTexto();