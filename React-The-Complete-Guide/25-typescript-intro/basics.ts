// Primatives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

let age: number;

// age = '31'; => error
age = 31;

let userName: string;

// userName = true => error
userName = "John";

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[];

hobbies = ["Games", "Festivals", "Magic"];

// Type alias. Defines a blueprint that other type definition can inherit from.
type Person = { name: string; age: number };

let person: Person;

person = {
  name: "John",
  age: 32,
};

// an array of objects specifically typed.
let people: Person[];

// Type inference

let course = "React - The Complete Guide";

// course = 1; => error.
// Typescript tries to guess what types you're using.
// You should rely on this more than you don't.

// Union types
// Type definition that allows more than one type.

let courseUnion: string | number = "React - The Complete Guide";

courseUnion = 2;
courseUnion = "Cool";

// Functions & types

function sum(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

// Typscript infers that this is an "any" type, without <T> generic added above.
// With it, typescript can dynamically figure out the type.
const updatedArray = insertAtBeginning(demoArray, -1); // => [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split(""); => error.
// stringArray[0].split(""); => 'a'
