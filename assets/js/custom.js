// Load the audio file
const audio = new Audio('assets/audio.mp3');

// Set it to loop
audio.loop = true;

// Function to start the audio
function playAudio() {
    audio.play().catch(err => {
        console.error('Error playing audio:', err);
    });
}

// Play the audio on every click anywhere in the window
window.addEventListener('click', () => {
    playAudio();
});
