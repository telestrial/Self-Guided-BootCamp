// Default Parameters
// If a parameter is not supplied. What should it be isntead?

function rollDieOld(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

// rollDie(6) => random number 1-6
// rollDie(20) => random number 1-20
// rollDie() => undefined

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// If there are multiple params, be careful about order of default values.

function greetOld(msg = "Hello", person) {
    console.log(`${msg}, ${person}!`)
}

// greetOld('Yo', 'John') => Yo, John!
// greetOld('John') => John, undefined!
// Put default args at end

// function greet(person, msg='Hello') {}