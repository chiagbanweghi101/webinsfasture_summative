// DOM Elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');
const status = document.getElementById('status');

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

// Text-to-Speech Setup
const speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

function speak(text) {
    // Cancel any ongoing speech
    if (currentUtterance) {
        speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    currentUtterance = utterance;
    speechSynthesis.speak(utterance);
}

// Add hover speech to buttons
function addHoverSpeech(element, text) {
    element.addEventListener('mouseenter', () => {
        speak(text);
    });
    element.addEventListener('mouseleave', () => {
        speechSynthesis.cancel();
    });
}

// Add hover speech to buttons
addHoverSpeech(startBtn, 'Start Recording button. Click to begin speaking.');
addHoverSpeech(stopBtn, 'Stop Recording button. Click to stop recording.');
addHoverSpeech(copyBtn, 'Copy Text button. Click to copy the transcribed text to clipboard.');

// Real-time Speech Recognition
startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    status.textContent = 'Listening... Speak now!';
    speak('Recording started. Please speak now.');
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    status.textContent = 'Click "Start Recording" to begin';
    speak('Recording stopped.');
});

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
    
    output.value = transcript;
};

recognition.onerror = (event) => {
    status.textContent = `Error: ${event.error}`;
    speak(`Error: ${event.error}`);
};

// Copy Text
copyBtn.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied!';
    speak('Text copied to clipboard');
    setTimeout(() => {
        copyBtn.textContent = 'Copy Text';
    }, 2000);
}); 