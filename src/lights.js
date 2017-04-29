/**
 * Turns the lights off - creates an transparent overlay on top of the body.
 */
export function off() {
    const overlayElement = document.createElement('div');
    overlayElement.id = 'light-overlay';
    overlayElement.style = 'height: 100%; width: 100%; position: fixed; z-index: 10000; left: 0; top: 0; filter: opacity(50%); background-color: grey;';
    document.body.appendChild(overlayElement);
}

/**
 * Turn the lights on - remove any transparent overlay on the body.
 */
export function on() {
    const overlayElement = document.getElementById('light-overlay');
    if (overlayElement) {
        overlayElement.parentElement.removeChild(overlayElement);
    }
}