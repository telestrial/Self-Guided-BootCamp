// Array Callback Methods
// Built-ins for arrays that require you pass in functions

// For Each
// Calls a function once per element in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29];

function print(element) {
    console.log(element);
}

numbers.forEach(print) //passes the element to your function

// You can declare a function right in the forEach() 
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})

for (let el of numbers) {
    console.log(el)
}

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


// Map
// Creates a -new- array with the results of calling a function on every
// element in an array.
// Since it is returning, it's important to do something with it.
const doubles = numbers.map(function (num) {
    return num * 2;
})

const titles = movies.map(function (movie) {
    return movie.title;
})
// Map is a good choice when we want to do something to an array and SAVE
// that result for some other purpose.

// Arrow Functions
// a compact alternative to a regular function expression

const add = function (x, y) {
    return x + y;
}
// Now using the arrow version:
const add2 = (x, y) => {
    return x + y;
}

const square = (x) => { // could have no parentheses around x in this case.
    return x ** 2;       // but not for two arguments.
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// this and arrow functions
// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// person.fullName(); // => 'Viggo Mortensen'

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
}

// person.fullName() // => reference to window object and 'this this' prints.
// Window is the object in arrow functions.


// Implicit returns - for one and only one statement in expression
// remove return and use parenthesis instead of curly
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)
// In this state, we can turn to one line and REMOVE parenth
const rollDie3 = () => Math.floor(Math.random() * 6) + 1

//can work with for each and map as well!
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

const newMovies2 = movies.map(movie => {
    return `${movie.title} - ${movie.score / 10}`
})

const newMovies3 = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))
// decision to move to one line should be about the line's length and clarity.
// above may be better served on one line.