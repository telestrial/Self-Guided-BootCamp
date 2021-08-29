// Given a sorted array and a number, write a function called sortedFrequency that
// counts the occurences of the number in the array.

const sortedFrequency = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] < target) left++;
    if (array[right] > target) right--;
    if (array[left] === target && array[right] === target)
      return right - left + 1;
  }

  return -1;
};

console.log(sortedFrequency([1, 2, 2, 2, 3, 4, 4, 5], 2));
