// const myName: string = 'John';

// const ten: number = 10;
// const negative: number = -10000;
// const decimal: number = 10.0001;

// const yes: boolean = true; // But not truthy or falsy things. Just true or false.

// const nothing: null = null;
// const noDefinition: undefined = undefined;

// let myName = 'John'; // TS uses type inference

// // myName = 10; // Making this an error.

// let someName; // Inference will not happen if you don't initialize AND assign.

// if (1 === 1) {
//   myName = 'John';
// } else {
//   myName = 'fdhjkshfdsa';
// }

// let anotherName: string; // We can assign a type at initialization without assignment.

// // Typescript knows about the different properties and methods that every type has.
// // If we refer to something that doesn't exist, TS will complain.

// const sentence = 'This is a short sentence.';
// sentence.includes('is'); // TS will know that includes exists.

// Function annotation.
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const joinStrings = (a: string, b: string): string => {
//   return a + b;
// };

// function multiply(a: number, b: number): number {
//   return a * b;
// }

// If you annotate the return, TS will force it.

// const post: { title: string; daysOld: number; published: boolean } = {
//   title: 'Latest Typescript News',
//   daysOld: 10,
//   published: true,
// };

// // Even a simple object's annotations can be a bit of a pain:
// const printPost = (postToPrint: {
//   title: string;
//   daysOld: number;
//   published: boolean;
// }) => {
//   return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// };

// // Enter Interfaces! The gate keepers.
// interface PostGatekeeper {
//   title: string;
//   daysOld: number;
//   published: boolean;
// }

// const printAnotherPost = (postToPrint: PostGatekeeper) => {
//   return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// };

// class Car {
//   // public color: string; // Public is the default and makes it available outside class
//   // private year: number; // Private keeps its usage to within these class brackets.

//   // Declaring public/private in construct is like the two lines above.
//   constructor(public color: string, private year: number) {
//     // this.color = color;
//     // this.year = year;
//   }

//   // color = 'red'; // These two lines are identical to what's above except
//   // year = 2000; // that you can't set values on initialization.

//   drive() {
//     this.putInGear();
//     this.pressPedal();
//     this.turnWheel();
//   }

//   private putInGear() {}

//   private pressPedal() {}

//   private turnWheel() {}
// }

// const myCar = new Car('red', 2000);

// DECORATORS

// const Component = (target: any) => {
//   console.log(target);
// };

// @Component
// class Car {}

// Decorator vs. Decorator factory. A decorator factory must return a function and is
// called with paranthesese()

// Imports/Exports

// import { Car } from './Car';

// const myCar = new Car();

// Implements: interface + class
// interface Driveable {
//   speed: number;
//   drive(): string;
// }

// class Car implements Driveable {
//   speed = 10;

//   drive() {
//     return `I am driving at ${this.speed}`;
//   }
// }

// const myCar = new Car();

// const startDriving = (vehicle: Driveable) => {
//   vehicle.drive();
// };

// startDriving(myCar);

// GENERICS
class NumberHolder {
  value: number;
}

class StringHolder {
  value: string;
}

class BooleanHolder {
  value: boolean;
}

// The above is unsustainable.

// This is a better way:
class ValueHolder<T> {
  value: T;
}

// const numberHolder = new ValueHolder<number>();
// numberHolder.value = 10;

// Works for functions, too.
const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

// Inference still works with this.
const value = valueWrapper(10);
