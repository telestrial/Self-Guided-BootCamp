// Function Scope
// The location where the variable is defined dictates where we have access
// to that variable. Variable "visibility."

// let totalEggs = 0 // this would allow for line 10 to work. 
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs); // totalEggs ref works here
}
// console.log(totaEggs) // totalEggs doesn't work here.

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    // console.log(bird) => 'Great Blue Heron'
}
// bird in console => 'Scarlet Macaw'


// Block Scope - { } within conditionals and loops
let radius = 8;
if (radius > 0) {
    const PI = 3.14159
    let msg = 'HI!'
    // var msg = 'Hi'
}
console.log(radius);
// console.log(PI) will not work
// console.log(msg) on 23 will not work
// console.log(msg) on 24 -would- work because var is not scoped to blocks. It
// is scoped to functions.


// Lexical Scope
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Superman'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`);
        }
        cryForHelp(); // would work because heroes is defined here.
    }
}


// Function Expressions
// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}

add(6, 7); // => 13


// Higher Order Functions
// let greet = function () { console.log('Hi!') };
// functions can be arguments

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    f();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
}

function rollDie() {
    const roll = Math.floor(Math.random * 6) + 1
    console.log(roll)
}

callTwice(rollDie); // no parantheses on the passed in function!
callTenTimes(rollDie);

// Returning Functions
function makeMysteryFunc() {
    const rand = Math.random;
    if (rand > 0.5) {
        return function () {
            console.log('Congrats. I am a good function!');
        }
    } else {
        return function () {
            alert('You have been infected by a computer virus');
            alert('Stop trying to close this window. You cannot escape!');
        }
    }

}

const mystery = makeMysteryFunc; // is an assignment. not an execution
mystery();

// function isBetween(n) {
//     return num >=50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

// A function factory.
function makeBetweenFunc(min, max) {
    return function (num) {
        // a template of the two functions above
        return num >= min && num <= max // returns a FUNCTION. not the result.
    }
}

const isChild = makeBetweenFunc(0, 19);

isChild(40); // => false
isChild(7); // => true

const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

// this is a way to create different versions of a function that do the 
// same basic logic, but under different parameters--instead of writing each
// one


// Defining Methods
// What's the difference between a method and a function?
// A method is a property that has been added as a property on an object.
// Every method is a function. Every function is not a method.

const myMath = {
    PI: 3.14159,

    square: function (num) {
        return num * num;
    },

    cube: function (num) {
        return num ** 3;
    }
}

myMath.square(2) // => 4
myMath.cube(2) // => 8
myMath['cube'](2) // strange syntax but would work./.

// shorthand for this exists:
// const myMath {
//     square () {
//         ...
//     },
//     cube () {
//         ...
//     }
// }
// no 'function' keyword. commas between still needed.


// The Keyword "This"
// use 'this' to access other properties on the same object.
// Most commonly used in methods.

const cat = {
    name: 'Blue Steel',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        // console.log('MEOW MEOW MEOW');
        console.log(`${this.name}, a ${this.color}, ${this.breed} goes "MEOWW!"`);
    }
}

// However, it's not so simple. 
// The value of -this- depends on the invocation context of the function it 
// is used in:

// const meow2 = cat.meow; => says "MEOWW!"

// so check what's to the LEFT of the function. That's what -this- is.
// Think as if there is a 'window' object to the left of the editor.
// Lookup "javascript 'window' object" for more info here.


// Use Try/Catch
// Sometimes you may anticipate: 'There might be an error here'
// Try/Catch allows you to try something and catch that error, failing
// 'gracefully.'

// blah.toUpperCase(); => UNCAUGHT RefrenceError: hello is not defined.
// Uncaught emphasis mine.

try {
    blah.toUpperCase();
} catch {
    console.log('ERROR!!!')
}

// Ensures the continuation of your code. Allows you handle POSSIBLE
// errors. Is used extensively with web requests/AJAX/APIs due to
// connection problems.

// function yell(msg) {
//     console.log(msg.toUpperCase().repeat(3));
// }

// yell('Hello!');
// yell(12338); => ERROR

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) { // e = the error reference
        console.log(e);
        console.log('Please pass a string next time!')
    }
}
