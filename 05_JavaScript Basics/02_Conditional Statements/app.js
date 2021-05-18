// console.log("BEFORE CONDITIONALS")

let random = Math.random();

if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5")
} else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5")
}
console.log(random);

// console.log("AFTER CONDITIONALS")

const dayOfWeek = prompt('What day is it?').toLowerCase()

if (dayOfWeek === 'monday') {
    console.log('Ugh. I hate Mondays!')
} else if (dayOfWeek === 'saturday') {
    console.log('Yay. I love Saturdays!')
} else if (dayOfWeek === 'friday') {
    console.log('Fridays are decent, especially after work!')
} else {
    console.log('MEH')
}

// 0-5 - FREE
// 5 - 10 - CHILD $10
// 10 - 65 - ADULT $20
// 65+ SENIOR $15

const age = 65;

if (age < 5) {
    console.log('You are a baby. You get in for free!')
} else if (age < 10) {
    console.log('You are a child. You pay $10!')
} else if (age < 65) {
    console.log('You are an adult. You pay $20!')
} else {
    console.log('You are a semior. You pay $10!')
}