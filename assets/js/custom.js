// Load the audio file
const audio = new Audio('assets/audio/song.mp3');
audio.loop = true; // Set the audio to loop

// Function to start the audio
function playAudio() {
    audio.play().catch(err => {
        console.error('Error playing audio:', err);
    });
}

// Add a click event listener to the window
window.addEventListener('click', () => {
    playAudio();
});

// Helper to add click listener to all iframes
function addIframeClickListeners() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        try {
            iframe.contentWindow.addEventListener('click', () => {
                playAudio();
            });
        } catch (e) {
            console.warn('Could not attach event listener to iframe:', e);
        }
    });
}

// Add iframe listeners once the page is fully loaded
window.addEventListener('load', addIframeClickListeners);

// Fallback: Also start playing on window focus (for certain iframe behaviors)
window.addEventListener('focus', () => {
    playAudio();
});
