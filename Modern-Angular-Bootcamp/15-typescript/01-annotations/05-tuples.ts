const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// Annotating a tuple:
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 2; => no.

// What do these numbers mean to you?
const carSpecs: [number, number] = [400, 3354];

// Objects are better because they give more info.
const carStats = {
  horsepower: 400,
  weight: 33354,
};
