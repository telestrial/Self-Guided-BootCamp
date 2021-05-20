const body = document.querySelector('body');
const h1 = document.querySelector('#h1Display');
const button = document.querySelector('#cButton');

function rgbNum() {
    return Math.floor(Math.random() * 255) + 1
}

function randColor() {
    return `rgb(${rgbNum()}, ${rgbNum()}, ${rgbNum()})`
}

function setColor() {
    h1.innerHTML = `${randColor()}`
    body.style.backgroundColor = h1.innerHTML;
}

button.addEventListener('click', setColor);