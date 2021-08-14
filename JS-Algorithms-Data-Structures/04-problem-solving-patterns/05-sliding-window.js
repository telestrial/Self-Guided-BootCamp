// Sliding Window
// Involves creating a window which can be an array, number, or string from one
// position to another. Depending on conditions, the window either increases
// or closes (and a new window is created).

// Write a function call maxSubarraySum which accepts an array of integers and a
// number called n. The function should calculate the maximum sum of n consecutive
// elements in the array.

const maxSubarraySum = (arr, num) => {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // Taking the 1st element away, adding the next element...etc
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
