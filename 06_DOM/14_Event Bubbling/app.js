const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

function makeRandColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`
}

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})

container.addEventListener('click', function () {
    container.classList.toggle('hide');
})