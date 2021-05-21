// Selecting HTMl elements
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');

// Temporary game logic
let playerOne = 0;
let playerTwo = 0;
let p1HasWon = false;
let p2HasWon = false;
let isGameOver = false;

// Display Update
function scoreUpdate(playerOne, playerTwo) {
    p1Display.innerText = playerOne;
    p2Display.innerText = playerTwo;
}

// Is there a winner? If so, make the adjustments to the card, inluding
// disabling further score++
function winCheck(playerOne, playerTwo) {
    const gamePoint = document.querySelector('#maxScore').value;

    if (playerOne == gamePoint && !p1HasWon && !p2HasWon) {
        p1Display.classList.toggle('win')
        p2Display.classList.toggle('lose')
        p1HasWon = true;
        isGameOver = true;

    } else if (playerTwo == gamePoint && !p2HasWon && !p1HasWon) {
        p2Display.classList.toggle('win')
        p1Display.classList.toggle('lose')
        p2HasWon = true;
        isGameOver = true;
    }
}

// Button logic
btn1.addEventListener('click', () => {
    if (!isGameOver) {
        playerOne++;
        scoreUpdate(playerOne, playerTwo)
        winCheck(playerOne, playerTwo)
    }
})

btn2.addEventListener('click', () => {
    if (!isGameOver) {
        playerTwo++;
        scoreUpdate(playerOne, playerTwo)
        winCheck(playerOne, playerTwo)
    }
})

btn3.addEventListener('click', () => {
    playerOne = 0;
    playerTwo = 0;
    scoreUpdate(playerOne, playerTwo)
    p1Display.classList.remove('win', 'lose')
    p2Display.classList.remove('win', 'lose')
    p1HasWon = false;
    p2HasWon = false;
    isGameOver = false;
})
