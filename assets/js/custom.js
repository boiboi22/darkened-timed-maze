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

// Function to handle the key press
function handleKeyPress(event) {
    const validKeys = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    // Check if the pressed key is one of the valid keys
    if (validKeys.includes(event.key)) {
        playAudio();

        // Remove the event listener to ensure the audio starts only once
        window.removeEventListener('keydown', handleKeyPress);
    }
}

// Add the keydown event listener
window.addEventListener('keydown', handleKeyPress);
