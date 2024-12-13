// This will load the audio file
const audio = new Audio('assets/audio.mp3');

// Set it to loop
audio.loop = true; // Set the audio to loop

// Function to start the audio
function playAudio() {
    audio.play().catch(err => {
        console.error('Error playing audio:', err);
    });
}

// Listen for a user interaction (click or keypress) before playing audio
window.addEventListener('click', playAudio);  // Plays audio on any click
// Or use 'keydown' to trigger on the first key press
// window.addEventListener('keydown', playAudio);
