let apples = 5;
apples = 10;
// apples = 'big fail' // => This will fail..bigly.

let speed: string = 'fast';
// speed = 10; // => Error.

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, !false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Most of the above annotations are actually unncessary.
// When to use annotations:

// 1) Function that returns the 'any' type. You must avoid letting this happen.
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // => {x: 10, y: 20};

// 2) When we declare a variable on one line and initialize it later.
let words = ['red', 'green', 'blue'];
// let foundWord: boolean; => This works, but next line is better.
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly.
let numbers = [-10, -1, 12];
// let numberAboveZero; // Could be set to number or boolean 'false'.
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // => Without annoation on 58, would error.
  }
}
