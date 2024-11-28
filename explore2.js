// Run this script after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    // Button glow effect
    const glowButton = document.querySelector('#glow-button');
    glowButton.addEventListener('mouseover', () => {
        glowButton.classList.add('glow-effect');
    });

    glowButton.addEventListener('mouseleave', () => {
        glowButton.classList.remove('glow-effect');
    });

    // Reveal hidden message
    const revealButton = document.querySelector('#reveal-button');
    const hiddenText = document.querySelector('.hidden-text');
    revealButton.addEventListener('click', () => {
        hiddenText.style.display = 'block';
        revealButton.disabled = true;
        revealButton.textContent = "Clue Revealed!";
    });

    // Countdown timer
    const timerDisplay = document.querySelector('#timer');
    let timeLeft = 30; // 30 seconds to "escape"

    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Time Remaining: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up! The dungeon collapses...";
            document.body.classList.add('danger'); // Add a danger class to shake the page
        }
    }, 1000);
});
