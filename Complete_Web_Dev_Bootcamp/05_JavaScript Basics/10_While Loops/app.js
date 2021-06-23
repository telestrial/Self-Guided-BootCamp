//While Loops

let num = 0;
while (num < 10) {
    num++;
    console.log(num)
}

// == for (let num = 0; num < 10; num++) {...}

// This is useful when we really have no idea when the loop condition will be
// false. Think about game conditions. while (!gameover) {...}:

const secret = "BabyHippo"

let guess = prompt('enter the secret code');

while (guess !== secret) {
    guess = prompt('enter the secret code');
}

console.log('Congrats. You guessed right!')

// Break Keyword

let input = prompt('Hey. Say something');

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me') { break; }
}

console.log('Okay. Fine.')

for (let i = 0; i <= 1000; i++) {
    console.log(i);
    if (i === 100) { break; } //not typical, but an option.
}