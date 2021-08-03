const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40];
// This is problematic because it is too permissive in typing. values can be jumbled.

// const pepsi: [string, boolean, number] = ['brown', true, 40];
// This would be more clear than the previous.

// Type alias - The best solution.
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
// might be good because it is reusable.
const sprite: Drink = ['clear', true, 10];

// Why tuples kinda stink. What do these numbers mean?
const carSpecs: [number, number] = [400, 3354];

// The object version. Much more clear. Not a lot more work.
const carStats = {
  horsepower: 400,
  weight: 3354,
};
