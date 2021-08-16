const collectOddValue = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // Without this concat, new array would always be []
  newArr = newArr.concat(collectOddValue(arr.slice(1)));
  return newArr;
};

// Pure recursion tips:

// For arrays, use methods like slice, spread, and concat that will make copies of
// arrays.

// Strings are immutable, so you will need to use methods like slice, substr, or
// substring

// For objects, use Object.assign or the spread operator.
