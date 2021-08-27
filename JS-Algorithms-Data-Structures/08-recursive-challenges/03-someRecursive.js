// Write a recursive function called someRecursive which accepts an array and a
// callback. The function returns true if a single value in the array return true
// when passed to the callback. Otherwise, it returns false.

const isOdd = (val) => val % 2 !== 0;

const someRecursive = (array, callback) => {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
};

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // => true
console.log(someRecursive([1, 6, 8], isOdd)); // => false
