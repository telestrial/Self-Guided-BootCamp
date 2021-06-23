const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Object != Object literal. Above is the latter. Must use -in- and -not- of.
// Confusing.

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}

// Special object method Object.values(Object) will give us array of object.

let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
    total += score;
}

console.log(total / scores.length);

