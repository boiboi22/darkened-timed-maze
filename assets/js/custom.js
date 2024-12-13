// This will load the audio file
const audio = new Audio('assets/audio.mp3');

// Set it to autoplay and loop
audio.autoplay = true; // Start playing automatically when the page loads
audio.loop = true; // Set the audio to loop

// Function to start the audio
function playAudio() {
    audio.play().catch(err => {
        console.error('Error playing audio:', err);
    });
}

// Automatically play the audio when the page loads
window.addEventListener('load', playAudio);
