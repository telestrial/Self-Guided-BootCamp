// Write a function that accepts a sorted array and counts the unique values
// in that array. There can be negative numbers, but it will always be sorted.

const countUniqueValues = (array) => {
  if (array.length === 0) return 0;
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[j] !== array[i]) {
      j++;
      array[j] = array[i];
    }
  }
  return j + 1;
};

//  j
// [1, 2, 3, 4, 5, 6, 10, 5, 5, 6, 10]
//     i

// countUniquevalues([1, 1, 1, 1, 1, 1, 2]) => 2
// countUniquevalues([1, 2, 3, 3, 3, 4, 10]) => 5
// countUniquevalues([]) => 0

console.log(countUniqueValues([-1, 0, 1, 1, 1, 2, 5, 10]));
