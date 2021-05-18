// Spread
// allows an iterable such as an array to be expanded in places where zero
// or more argument or elements are expected, or an object expression to be
// expanded in places where zero or more key-value pairs are expected.
// .....yikes.

// Math.max(1, 100, 23, 89, 101) => 101
const nums = [1, 100, 23, 89, 101]
// Math.max(nums) => NaN
// max anticipates separate numbers and NOT an array.
// Spread solves this.
Math.max(...nums) // === Math.max(1, 100, 23, 89, 101)
// It spreads the array out into separate arguments.
console.log('hello') // => hello 
console.log(...'hello') // => h e l l o as if console.log('h', 'e', 'l'...)

// Spread with array literals
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats]; // => ['Blue', 'Scout', 'Rocket']
// COPIES the array.
const allpets = [...cats, ...dogs]; // => ['Blue', 'Scout', 'Rocket', 'Rusty' ...]
// Order matters. 

// Spread in Object Literals
// Copies properties from one object into another object literal

const feline = { legs: 4, family: 'Felidae' };
const canine = { legs: 4, family: 'Caninae' };

const felineCopy = { ...feline, color: 'black' };

const catDog = { ...feline, ...canine };
// this would create a frankenobject. it would contain properties from both,
// both canine's common properties would win out.

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromFrom, id: 2345, isAdmin: false };
// It can be a great way to add your own 'server-side' stuff to an object.

