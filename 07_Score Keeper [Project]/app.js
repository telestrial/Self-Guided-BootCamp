const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const scoreDisplay = document.querySelector('h1');
const p1ScoreDisplay = document.querySelector('#p1');
const p2ScoreDisplay = document.querySelector('#p2');
let playerOne = 0;
let playerTwo = 0;

function scoreUpdate(playerOne, playerTwo) {
    scoreDisplay.innerHTML = `<span id="p1">${playerOne}</span> to <span id="p2">${playerTwo}</span>`
}

function winCheck(playerOne, playerTwo) {
    const gamePoint = document.querySelector('#maxScore').value;

    if (playerOne >= gamePoint) {
        console.log('p1 win')
        p1ScoreDisplay.classList.toggle('win')
    } else if (playerTwo >= gamePoint) {
        console.log('p2 win')
    }
}

btn1.addEventListener('click', () => {
    playerOne++;
    scoreUpdate(playerOne, playerTwo)
    winCheck(playerOne, playerTwo)
})

btn2.addEventListener('click', () => {
    playerTwo++;
    scoreUpdate(playerOne, playerTwo)
    winCheck(playerOne, playerTwo)
})

btn3.addEventListener('click', () => {
    playerOne = 0;
    playerTwo = 0;
    scoreUpdate(playerOne, playerTwo)
})
