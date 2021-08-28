// Write a recursive function called nestedEvenSum. Return the sum of all even numbers
// in an object which may contain nested objects.

const nestedEvenSum = (val) => {
  if (typeof val !== 'object') return val;
  return Object.values(val)
    .map(nestedEvenSum)
    .filter((v) => v % 2 === 0)
    .reduce((sum, v) => sum + v, 0);
};

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

console.log(nestedEvenSum(obj1));
