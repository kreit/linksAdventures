document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.querySelector('#reveal-button'); // The button
    const hiddenMessage = document.querySelector('.hidden-message'); // The message

    revealButton.addEventListener('click', () => {
        // Add the "visible" class to reveal the message
        hiddenMessage.classList.add('visible');
        
        // Optionally disable the button after the message is revealed
        revealButton.disabled = true;
        revealButton.textContent = "Message Revealed!";
    });
});

