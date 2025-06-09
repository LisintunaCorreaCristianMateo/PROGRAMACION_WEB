// Comprobar soporte
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API");
  throw new Error("Web Speech API no soportada");
}

const recognition = new SpeechRecognition();
recognition.lang = 'es-ES';
recognition.interimResults = true; // Muestra resultados intermedios
recognition.continuous = false;    // Se para automáticamente al final de la frase

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const outputDiv = document.getElementById('output');

startBtn.addEventListener('click', () => {
  recognition.start();
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  recognition.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

recognition.addEventListener('result', (event) => {
  let transcript = '';
  for (const res of event.results) {
    transcript += res[0].transcript;
  }
  outputDiv.textContent = transcript;
});

recognition.addEventListener('end', () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
