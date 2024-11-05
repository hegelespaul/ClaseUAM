
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
