document.addEventListener('DOMContentLoaded', () => {
    const disarmButton = document.querySelector('#disarm-button');
    const outcomeText = document.querySelector('.outcome');
    const treasureLink = document.querySelector('#treasure-link');

    disarmButton.addEventListener('click', () => {
        // Update the button and outcome text
        disarmButton.disabled = true;
        disarmButton.textContent = "Trap Disarmed!";
        outcomeText.style.display = 'block';
        outcomeText.textContent = "You disarmed the trap just in time! The path ahead is now safe.";

        // Show the link to the treasure room
        treasureLink.style.display = 'block';
    });
});
