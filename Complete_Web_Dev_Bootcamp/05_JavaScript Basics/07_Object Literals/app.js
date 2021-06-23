//Objects are a collection of properties

const fitBitData = {
    totalSteps: 30384,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}

// Key + value. totalSteps + 30384. Can store any type. There is a greater
// structure here vs. arrays. Could still use arrays, but hard to understand.

// Easier access of values, too.

const person = {
    firstName: 'John',
    lastName: 'Williams',
    age: 31,
    alive: true,
    bodyParts: ['head', 'shoulders', 'knees', 'toes']
}

// person['age'] => 31
// person['alive'] => true
// person['bodyParts'] => ['head', 'shoulders'...]

// another use of dot syntax. All keys are converted to a string at assignment
// in reference.

// person.age => 31
// person.alive => true
// person.bodyParts => ['head', 'shoulders'...]

// Why use one over the other? thing[] allows you to use an expression.
// For example, we can pass in a variable.

// let isAlive = 'alive'
// person[isAlive] => true ...the value of the kye alive, which isAlive references.

const midterms = {
    danielle: 96,
    thomas: 78
}

// midterms.thomas => 78

midterms.thomas = 79;

// midterms.thomas => 79

midterms.thomas = 'C+';
midterms['danielle'] = 'A';

// midterms => {danielle: 'A', thomas: 'C+'}
// Adding key-value pairs is just as easy.

midterms.ezra = 'B+';
midterms['antonio'] = 'A-';

// midterms => {danielle: 'A', thomas: 'C+', ezra: 'B+', antonio: 'A-'}

// Nested Arrays + Objects
// Some data structures are better put as a combination of the two.

const comments = [

    {
        username: 'Tammy',
        text: 'lololol',
        votes: 9
    },

    {
        username: 'Fishyboi',
        text: 'glubglub',
        votes: 12374
    }
]

// comments[1].text => 'glubglub'
// There is great power here. Much of the data structures on the internet are
// combinations of arrays of objects which are objects of errays which are...
// JSON, API, etc [to be covered later?]