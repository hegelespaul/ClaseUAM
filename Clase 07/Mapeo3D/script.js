import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

//Cargar un DRACOLoader para la lectura de modelos comprimidos
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
dracoLoader.preload();

// Selección del canvas HTML donde se renderizará la escena
const canvas = document.getElementById("glbCanvas");

// Configuración de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Controles para rotar, acercar y alejar la cámara
const controls = new OrbitControls(camera, canvas);
controls.maxDistance = 250;
controls.minDistance = 120;
controls.addEventListener("change", () => {
    console.log(`Posición de la cámara: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
    console.log(`Objetivo de los controles: x=${controls.target.x}, y=${controls.target.y}, z=${controls.target.z}`);
});

// Agregar luz ambiental a la escena
const light = new THREE.AmbientLight(0xEDFFFD, 1.5); // Luz blanca con intensidad 1.5
scene.add(light);

//Agregar Fog
scene.fog = new THREE.Fog(0xEDEDED, 100, 600);

// Cargar una textura de fondo para la escena
const textureLoader = new THREE.TextureLoader();

// Crear un cubo semitransparente
const geometry = new THREE.BoxGeometry(40, 45, 40); // Dimensiones del cubo
const transparentMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000, // Rojo
    transparent: true,
    opacity: 0.1, // Semitransparente
});
const cube = new THREE.Mesh(geometry, transparentMaterial);

// Crear bordes para el cubo
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Bordes rojos
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

// Configuración del raycaster para detectar interacciones con el cubo
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Referencia al pop-up y botón de cierre
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

// Funciones para mostrar y ocultar el pop-up
function showPopup() {
    popup.style.display = "block";
}

function hidePopup() {
    popup.style.display = "none";
}

closeBtn.addEventListener("click", hidePopup);

// Manejar clics en el canvas
canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(cube);

    if (intersects.length > 0) {
        showPopup();
    }
});

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(cube);

    document.body.style.cursor = intersects.length > 0 ? "pointer" : "grab";
});

// Cargar un modelo GLB en la escena, añadir su DRACOLoader
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

loader.load(
    "model-min.glb", // Ruta al archivo GLB
    (gltf) => {
        // Cargar una textura como fondo de la escena
        textureLoader.load('photos_2020_10_13_fst_sky-day-min.jpg', (texture) => {
            scene.background = texture; // Establecer textura de fondo
        });

        // Agregar el modelo cargado a la escena
        const model = gltf.scene;
        model.position.set(0, 0, 0); // Posición del modelo
        model.scale.set(1, 1, 1); // Escala del modelo
        scene.add(model);

        // Posicionar y agregar el cubo y sus bordes
        cube.position.set(8, 50, 5);
        scene.add(cube);
        edges.position.set(8, 50, 5);
        scene.add(edges);
    },
    undefined,
    (error) => {
        console.error("Error al cargar el archivo GLB:", error);
    }
);

// Posicionar la cámara inicialmente
camera.position.set(-173.66593018783277, 144.3140461597877, 92.0364173839083);
controls.target.set(0, 1, 0);
controls.update();

// Bucle de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Ajustar el renderizador al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
