const buttonHeight = 250;
const buttonWidth = 250;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;


window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('no-button');

    button.addEventListener('click', () => alert('You clicked me'))

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
})

