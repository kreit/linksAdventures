document.addEventListener('DOMContentLoaded', () => {
    const treasureButton = document.querySelector('#treasure-button');
    const sparkleEffect = document.querySelector('.sparkle-effect');

    // Add glowing effect when hovering
    treasureButton.addEventListener('mouseover', () => {
        treasureButton.classList.add('glowing');
    });

    treasureButton.addEventListener('mouseleave', () => {
        treasureButton.classList.remove('glowing');
    });

    // Reveal the treasure
    treasureButton.addEventListener('click', () => {
        sparkleEffect.style.display = 'block';
        treasureButton.disabled = true;
        treasureButton.textContent = "Treasure Claimed!";
        treasureButton.classList.remove('glowing');
    });
});
