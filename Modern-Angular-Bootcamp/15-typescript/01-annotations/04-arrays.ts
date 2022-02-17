// Inferred:
const carMakers = ['ford', 'toyota', 'chevy'];
// Annotated:
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

// An array that contains arrays of strings. string[][]
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const ACar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const moreImportantDates: (Date | string)[] = [];
