// Given an array of 1s and 0s which has all ones followed by all zeroes, write a
// function called countZeroes which returns the number of zeroes in the array.

const countZeroes = (array) => {
  if (array.indexOf(0) === -1) return 0;
  return array.length - array.indexOf(0);
};

let sample = [1, 1, 1, 0, 0, 0, 0];

console.log(countZeroes(sample));
