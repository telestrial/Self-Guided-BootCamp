// Javascript Functions
// Resuseable code chunks.

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

// Not too long in example, but representative. What if it was this instead?
//
// let die1 = rollDie();
// let die2 = rollDie();
// ...
//
// or what if we wanted the option to roll n-sides die where n = any number?
// There is code economy here.
//
// Process is DEFINE -> RUN. Both must happen.
//
// Definiting a function:
//
// function funcName () {
//    do something
// }

function grumpus() {
    console.log('ugh..you again...');
    console.log('leave me alone.');
}

function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

grumpus();
console.log('****space between****'); // <---that's a function, too. =)
singSong();
singSong();
singSong();
singSong();
singSong();
singSong();

// You should almost always call functions AFTER their definition, but it still
// works if you don't. There are specific cases where you'd do that. We're not 
// there..yet.

// Functions can accept inputs, called paramenters. One or more.
// The value we pass in is the argument.
// Those inputs can then be used to do operations. Strings, ints, Objects, 
// object literals, other FUNCTIONS..many things.

function greet(name) {
    console.log(`Hello there, General ${name}.`);
}

greet('Williams');

// name is paramenter. 'Williams' is argument.

// Arguments are not inherently smart. They don't notice type.
// greet(11); => Hello there, General 11.

function robustGreet(firstName, lastName) {
    console.log(`Hello there, ${firstName} ${lastName}.`);
}

robustGreet('John', 'Williams');

// functions don't notice order of arguments. If you enter lastName first:
// robustGreet('Williams', 'John') => Hello there, Williams John.

function repeat(message, numberOfRepeats) {
    let result = '';
    for (let i = 0; i < numberOfRepeats; i++) {
        result += message;
    }
    console.log(result);
}

repeat('tick tock ', 10)

// javascript will function to accept less than arguments, but if the argument
// is used in the code in a way where its absence would error...it'll error.

// The Return Keyword
// built-in methods return values when we call them. We can store those values.
// This is a way to case the result of a function to a variable.

// function add(x, y) {
//     console.log(x + y);

// }
// let total = add(1, 1) => total is actually undefined here.
//

function add(x, y) {
    return x + y;
    console.log('This wont print') // it also STOPS the execution of the function.
}

let total = add(1, 1);

// total => 2
// return will EXPORT -whatever- out of the function.
// We can use this to show outcomes in functions:

function secondAdd(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    }
    // No else needed because return will break. so OTHERWISE, do this:
    let sum = x + y;
    return sum;
}

// Return can only return one thing. Maybe a collection of things. But just 1.
// Can be used with itself.

add(add(1, 1), 1); // => add(2, 1) => return 3



