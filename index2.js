document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert("The journey begins!");
        });
    });

    const heading = document.querySelector('header');
    heading.addEventListener('mouseover', () => {
        heading.style.color = "gold";
    });

    heading.addEventListener('mouseleave', () => {
        heading.style.color = "white";
    });
});
