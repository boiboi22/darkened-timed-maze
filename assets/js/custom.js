// Forward click events to the parent window
document.addEventListener('click', () => {
    window.parent.postMessage({ type: 'click' }, '*');
});
