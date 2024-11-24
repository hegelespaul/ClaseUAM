import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/controls/OrbitControls.js';

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Configuración básica de la escena
const canvas = document.getElementById("canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(0, 50, 30); // Posiciona la cámara para una vista amplia
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Añade iluminación a la escena
scene.add(new THREE.AmbientLight(0xFFFFFF, 0.5)); // Luz ambiental
const pointLight = new THREE.PointLight(getRandomHexColor(), 200, 0, 1); // Luz puntual
pointLight.position.set(30, 30, 30);
scene.add(pointLight);
scene.add(new THREE.HemisphereLight(getRandomHexColor(), 0xffffff, 20)); // Luz hemisférica

// Carga un mapa ambiental para reflejos y ambiente
const envMapLoader = new THREE.CubeTextureLoader();
const envMap = envMapLoader.load([
  'Standard-Cube-Map/px.png', 'Standard-Cube-Map/nx.png',
  'Standard-Cube-Map/py.png', 'Standard-Cube-Map/ny.png',
  'Standard-Cube-Map/pz.png', 'Standard-Cube-Map/nz.png'
]);
scene.environment = envMap; // Asigna el mapa ambiental a la escena

// Configuración de las esferas y sus etiquetas
const distributionRadius = 50; // Radio de distribución de las esferas
const n = 224; // Número de esferas
const spheres = []; // Lista para almacenar las esferas

//Etiquetas
const tags = [
  "Acústico", "Aéreo", "Alienígena", "Ambiental", "Analógico", "Angular", "Apocalíptico",
  "Arpegiado", "Artificial", "Atmosférico", "Balanceado", "Campanoso", "Binaural", "Borroso",
  "Retumbante", "Rebotante", "Brillante", "Metálico", "Aventado", "Quebradizo", "Burbujeante",
  "Zumbante", "Cavernoso", "Caótico", "Entre cortado", "Coral", "Limpio", "Percutivo", "Recortado",
  "Frío", "Colorido", "Complejo", "Comprimido", "Consonante", "Cuarteado", "Nítido", "Crujiente",
  "Oscuro", "Profundo", "Delicado", "Denso", "Desafinado", "Digital", "Distante", "Distorsionado",
  "Disonante", "Mareante", "Soñador", "Seco", "Dinámico", "Con eco", "Eléctrico", "Emotivo",
  "Efímero", "Etéreo", "Explosivo", "Expansivo", "Expresivo", "Grueso", "Filtrado", "Plano",
  "Trémulo", "Enfocado", "Granuloso", "Zumbador", "Resplandeciente", "Misterioso", "Radiante",
  "Granular", "Áspero", "Rítmico", "Creciente", "Armónico", "Abrumador", "Inquietante", "Pesado",
  "Agudo", "Hueco", "Llamativo", "Húmedo", "Hipnótico", "Industrial", "Intenso", "Intrincado",
  "Estridente", "Jazzy", "Jugoso", "Lánguido", "Estratificado", "Realista", "Ligero", "Vivo",
  "Baja fidelidad", "Alto", "Exuberante", "Mecánico", "Melódico", "Cálido", "Relajante", "Táctil",
  "Texturizado", "Afilado", "Rugoso", "Aflautado", "Resonante", "Retro", "Reverberante", "Melancólico",
  "Plañidero", "Campanoso", "Redondo", "Rústico", "Rasposo", "Estruendoso", "Brillante", "Sibilante",
  "Sedoso", "Simple", "Oscuro", "Espumoso", "Flotante", "Místico", "Evolutivo", "Polifónico",
  "Sincronizado", "Ecológico", "Cinemático", "Imponente", "Pausado", "Ambiental", "Imponente", "Frágil",
  "Ligero", "Meticuloso", "Delicioso", "Placentero", "Peculiar", "Natural", "Procesado", "Con eco",
  "Oscilante", "Resonante", "Épico", "Lejano", "Vibrante", "Desafiante", "Atractivo", "Lujoso", "Vivo",
  "Estático", "Armónico", "Desenfocado", "Intenso", "Claro", "Con eco", "Misterioso", "Palpitante",
  "Majestuoso", "Perdido", "Brumoso", "Cálido", "Saturado", "Distorsionado", "Ágil", "Explorador",
  "Apagado", "Melancólico", "Hipnótico", "Amplio", "Nostálgico", "Filtrado", "Misterioso", "Suspenso",
  "Ondulado", "Con eco", "Chillón", "Fuerte", "Claro", "Orgánico", "Procesado", "Sombrío", "Poderoso",
  "Vibrante", "Retumbante", "Susurrante", "Cónico", "Vigoroso", "Ligero", "Delicado", "Brillante",
  "Tintineante", "Apagado", "Aflautado", "Ondulado", "Oscilado", "Pulsante", "Amplio", "Reflejado",
  "Frenético", "Subyugante", "Misterioso", "Velado", "Ligado", "Retro", "Rugoso", "Sólido", "Resonante",
  "Imaginativo", "Enérgico", "Radiante", "Fino", "Sutil", "Minimalista", "Complejo", "Tenso", "Relajado",
  "Agresivo", "Psicodélico", "Orgánico", "Clásico", "Rústico", "Marcado", "Transparente", "Textural"
];


// Crear elemento DOM para mostrar etiquetas
const tagElement = document.createElement('div');
tagElement.style.position = 'absolute';
tagElement.style.color = '#fff';
tagElement.style.background = 'rgba(0, 0, 0, 0.7)';
tagElement.style.padding = '5px';
tagElement.style.borderRadius = '5px';
tagElement.style.display = 'none'; // Oculto inicialmente
document.body.appendChild(tagElement);

// Generar las esferas con posiciones y etiquetas
for (let i = 0; i < n; i++) {
  const sphereMaterial = new THREE.MeshPhysicalMaterial({
    color: getRandomHexColor(),
    metalness: 0.9,
    clearcoat: 0.5,
    transparent: true,
    opacity: 0.8,
    reflectivity: 1,
    envMap: envMap, // Reflexión ambiental
  });

  const sphereGeometry = new THREE.SphereGeometry(Math.random() * 5, 32, 32); // Geometría de alta definición
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // Posición aleatoria usando coordenadas esféricas
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.random() * Math.PI;
  const radius = Math.cbrt(Math.random()) * distributionRadius;

  sphere.position.set(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi)
  );

  // Asignar etiqueta a la esfera
  sphere.userData.tag = tags[i];

  // Métodos personalizados para interacción
  sphere.onPointerOver = () => {
    sphere.material.opacity = 1; // Resalta la esfera
    canvas.style.cursor = 'pointer'; // Cambia el cursor
    displayTag(sphere); // Muestra la etiqueta
  };

  sphere.onPointerOut = () => {
    sphere.material.opacity = 0.8; // Restablece opacidad
    canvas.style.cursor = 'grab'; // Restablece el cursor
    hideTag(); // Oculta la etiqueta
  };

  spheres.push(sphere);
  scene.add(sphere);

}

// Función para mostrar etiquetas
function displayTag(sphere) {
  const tag = sphere.userData.tag;
  tagElement.textContent = tag;
  tagElement.style.display = 'block';

  // Proyectar posición 3D al 2D del canvas
  const vector = sphere.position.clone().project(camera);
  tagElement.style.left = `${(vector.x + 1) * canvas.clientWidth / 2}px`;
  tagElement.style.top = `${(-vector.y + 1) * canvas.clientHeight / 2}px`;
}

// Función para ocultar etiquetas
function hideTag() {
  tagElement.style.display = 'none';
}

// Añadir raycaster para detección de intersecciones
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

canvas.addEventListener('mousemove', (event) => {
  // Convertir posición del mouse a coordenadas normalizadas
  mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera); // Rayo desde la cámara
  const intersects = raycaster.intersectObjects(spheres); // Intersecciones con esferas

  spheres.forEach(sphere => sphere.onPointerOut()); // Restablecer todas las esferas

  if (intersects.length > 0) {
    const intersectedSphere = intersects[0].object;
    intersectedSphere.onPointerOver();
  }
});

window.addEventListener('click', (event) => {

  if (event.target.tagName === 'DIV') {
    const name = event.target.textContent
    const audioUrl = 'audios/' + name + '.wav'
    playSound(audioUrl);
  }

  // Convert mouse position to normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    intersects[0].object.material.color.set(getRandomHexColor());
    const name = intersects[0].object.userData.tag
    const audioUrl = 'audios/' + name + '.wav'
    playSound(audioUrl);
  }
});

// Controles de cámara orbital
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Movimiento suave

// Actualizar tamaño al redimensionar
window.addEventListener("resize", () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Bucle de animación
function animate() {
  controls.update(); // Actualizar controles
  renderer.render(scene, camera); // Renderizar escena
  requestAnimationFrame(animate); // Continuar animación
}
animate();

// Define el AudioContext
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let currentAudioBuffer = null; // Guarda el buffer de audio
let currentSource = null; // Da seguimiento a la fuente de sonido

// Función para cargar y reproducir el audio
async function playSound(audioUrl) {
  try {
    // Detiene el sonido
    if (currentSource) {
      currentSource.stop();
      currentSource = null;
    }

    // Alimentaydecodifica los datos del audio
    const response = await fetch(audioUrl);
    const arrayBuffer = await response.arrayBuffer();
    currentAudioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Crea una nueva fuente y reproduce el sonido
    currentSource = audioContext.createBufferSource();
    currentSource.buffer = currentAudioBuffer;
    currentSource.connect(audioContext.destination);
    currentSource.start(0);
  } catch (error) {
    console.error("Error playing sound:", error);
  }
}