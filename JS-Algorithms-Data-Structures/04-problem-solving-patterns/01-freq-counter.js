// Using an object to collect values and their frequencies. Comparing inputs and
// how often differents things occur.

// "Write a function called same, which accepts two arrays. The function should
//  return true if every value in the array has its corresponding value squared
//  in the second array. The frequency of values must be the same."

// This is 0(n^2) time, so not ideal:
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf makes this a nested loop.
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

arr1 = [2, 3, 4];
arr2 = [4, 9, 16];

// console.log(same(arr1, arr2)); // => true

// Here it is in O(n) time.
const same2 = (arr1, arr2) => {
  // Return false if the arrays aren't the same size.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Loop over each array one time, count the frequency of items.
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let item of arr1) {
    freqCounter1[item] = (freqCounter1[item] || 0) + 1; // Initializing at 0
  }
  for (let item of arr2) {
    freqCounter2[item] = (freqCounter2[item] || 0) + 1; // Initializing at 0
  }

  for (let key in freqCounter1) {
    // if an array1 key is not IN freqCounter2, return false.
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    // if the FREQUENCY count of an array2 key is NOT in array1 when that key is squared..
    // return false.
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same2(arr1, arr2));
