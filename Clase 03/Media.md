# Tutorial de Grabación de Audio y Video en JavaScript

En este tutorial, aprenderás a grabar audio y video en JavaScript, a guardar la grabación y a añadir un título y descripción. Este tutorial utiliza la API de `MediaRecorder` para capturar el audio y video desde el dispositivo del usuario.

---

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Accediendo a los Dispositivos del Usuario](#accediendo-a-los-dispositivos-del-usuario)
3. [Grabando el Medio](#grabando-el-medio)
4. [Guardando la Grabación](#guardando-la-grabación)
5. [Añadiendo un Título y Descripción](#añadiendo-un-título-y-descripción)
6. [Código Completo](#código-completo)

---

## 1. Introducción

Primero, crearemos un archivo HTML simple donde añadiremos botones para iniciar y detener la grabación, y campos de entrada para el título y descripción de la grabación.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grabador de Medios</title>
</head>
<body>
  <h1>Grabar Audio y Video</h1>
  
  <label for="title">Título:</label>
  <input type="text" id="title" placeholder="Introduce el título del medio">
  
  <label for="description">Descripción:</label>
  <textarea id="description" placeholder="Introduce una descripción"></textarea>
  
  <button id="start">Iniciar Grabación</button>
  <button id="stop" disabled>Detener Grabación</button>
  
  <video id="preview" controls autoplay></video>
  
  <script src="script.js"></script>
</body>
</html>
```

## 2. Accediendo a los Dispositivos del Usuario

Para acceder a la cámara y micrófono del usuario, utilizamos la API `navigator.mediaDevices.getUserMedia`. Estableceremos restricciones para capturar tanto audio como video.

```javascript
// script.js
let mediaStream;
let mediaRecorder;
let recordedChunks = [];

async function startMedia() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('preview').srcObject = mediaStream;
    console.log('Se ha iniciado el flujo de medios');
  } catch (err) {
    console.error('Error al acceder a los dispositivos de medios:', err);
  }
}
```

Este código inicializa el flujo de medios y muestra la vista previa del video en la página.

## 3. Grabando el Medio

Usando la API `MediaRecorder`, grabaremos los datos de audio y video como una serie de fragmentos. Una vez que se detenga la grabación, estos fragmentos se combinarán en un solo archivo.

```javascript
function startRecording() {
  recordedChunks = [];
  mediaRecorder = new MediaRecorder(mediaStream);
  
  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = saveRecording;
  mediaRecorder.start();
  console.log('Grabación iniciada');
}

function stopRecording() {
  mediaRecorder.stop();
  console.log('Grabación detenida');
}
```

Aquí sucede lo siguiente:

- `startRecording`: Crea un nuevo `MediaRecorder`, guarda los datos en `recordedChunks` y empieza a grabar.
- `stopRecording`: Detiene la grabación y llama a la función `saveRecording`.

## 4. Guardando la Grabación

Después de detener la grabación, los fragmentos se combinan en un solo Blob y se convierten en un archivo descargable.

```javascript
function saveRecording() {
  const blob = new Blob(recordedChunks, { type: 'video/webm' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;

  const title = document.getElementById('title').value || 'Sin Título';
  downloadLink.download = `${title}.webm`;
  downloadLink.textContent = 'Descargar tu grabación';
  document.body.appendChild(downloadLink);
  console.log('Grabación guardada');
}
```

- **Blob**: Crea un Blob a partir de los fragmentos grabados.
- **Enlace de Descarga**: Genera un enlace para descargar el archivo con el título especificado.

## 5. Añadiendo un Título y Descripción

Vamos a añadir un título y descripción a la grabación, creando entradas de texto en el HTML y recuperando estos valores en la función `saveRecording`.

```javascript
const title = document.getElementById('title').value || 'Sin Título';
const description = document.getElementById('description').value || 'Sin descripción';
console.log('Título:', title);
console.log('Descripción:', description);
```

## 6. Código Completo

Conectemos los botones HTML a las funciones JavaScript para crear la funcionalidad completa de la aplicación.

```javascript
document.getElementById('start').addEventListener('click', () => {
  startMedia();
  startRecording();
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
});

document.getElementById('stop').addEventListener('click', () => {
  stopRecording();
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
});
```

Este código:

- Inicia la grabación de medios al hacer clic en el botón **Iniciar Grabación**.
- Detiene la grabación al hacer clic en el botón **Detener Grabación**.

---

## Código Completo

Aquí tienes el código HTML y JavaScript completo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grabador de Medios</title>
</head>
<body>
  <h1>Grabar Audio y Video</h1>
  
  <label for="title">Título:</label>
  <input type="text" id="title" placeholder="Introduce el título del medio">
  
  <label for="description">Descripción:</label>
  <textarea id="description" placeholder="Introduce una descripción"></textarea>
  
  <button id="start">Iniciar Grabación</button>
  <button id="stop" disabled>Detener Grabación</button>
  
  <video id="preview" controls autoplay></video>
  
  <script>
    let mediaStream;
    let mediaRecorder;
    let recordedChunks = [];

    async function startMedia() {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('preview').srcObject = mediaStream;
      } catch (err) {
        console.error('Error al acceder a los dispositivos de medios:', err);
      }
    }

    function startRecording() {
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(mediaStream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = saveRecording;
      mediaRecorder.start();
    }

    function stopRecording() {
      mediaRecorder.stop();
    }

    function saveRecording() {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;

      const title = document.getElementById('title').value || 'Sin Título';
      const description = document.getElementById('description').value || 'Sin descripción';
      downloadLink.download = `${title}.webm`;
      downloadLink.textContent = 'Descargar tu grabación';
      document.body.appendChild(downloadLink);

      console.log('Título:', title);
      console.log('Descripción:', description);
    }

    document.getElementById('start').addEventListener('click', () => {
      startMedia();
      startRecording();
      document.getElementById('start').disabled = true;
      document.getElementById('stop').disabled = false;
    });

    document.getElementById('stop').addEventListener('click', () => {
      stopRecording();
      document.getElementById('start').disabled = false;
      document.getElementById('stop').disabled = true;
    });
  </script>
</body>
</html>
```
