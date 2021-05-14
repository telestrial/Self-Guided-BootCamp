// console.log("BEFORE CONDITIONALS")

// let random = Math.random();

// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5")
// }

// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5")
// }

// console.log("AFTER CONDITIONALS")

// const dayOfWeek = 'Friday'

// if (dayOfWeek === 'Monday') {
//     console.log('Ugh. I hate Mondays!')
// } else if (dayOfWeek === 'Saturday') {
//     console.log('Yay. I love Saturdays!')
// } else if (dayOfWeek === 'Friday') {
//     console.log('Fridays are decent, especially after work!')
// }

// 0-5 - FREE
// 5 - 10 - CHILD $10
// 10 - 65 - ADULT $20
// 65+ SENIOR $20

const age = 65;

if (age < 5) {
    console.log('FREE')
} else if (age < 10) {
    console.log('$10')
} else if (age < 65) {
    console.log('$20')
} else if (age <= 65) {
    console.log('$15')
}