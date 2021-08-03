const carMakers = ['ford', 'toyota', 'chevy'];
// optionally could add ": string[]" on the left side of this. Required when
// you aren't initializing the variable with anything.

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
// const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // => Error. Can't assign number to string.

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(1); => Error. Can't assign number to string or Date array.
