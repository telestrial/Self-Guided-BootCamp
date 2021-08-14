// Multiple Pointers
// Creating pointers or values that correspond to an index or position and move
// towards the beginning, end, or middle based on a certain condition.

//v--->              <----v
[-4, -3, -2, -1, 0, 1, 2, 5];
('alksdjklajdklsajkdsajklass');

// "Write a function called sumZero which accepts a sorted array of integers. This
//  function should find the first pair where the sum is 0, return an array that
//  includes both values that sum to zero or undefined if a pair does not exist."
//
//  sumZero([-3, -2, -1, 0, 1, 2 ,3]) => [-3, 3]
//  sumZero([-2, 0, 1, 3]) => undefined
//
// The naive solution is the nested loop, checking entire array for each item
// to see if you can find two values that equal 0.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

console.log(sumZero([-2, -1, 0, 3]));
