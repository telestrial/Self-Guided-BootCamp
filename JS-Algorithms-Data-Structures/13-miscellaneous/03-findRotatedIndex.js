// Write a function called findRotatedIndex which accepts a rotated array of sorted
// numbers and an integer. The function should return the index of the integer in the
// array. If the value is not found, return -1.

const findRotatedIndex = (array, target) => {
  let start = 0;
  let end = array.length;
  let rotated;
  let middle;

  let first = array[start];
  let last = array[end - 1];

  while (start < end) {
    rotated = Math.floor((start + end) / 2);
    if (array[rotated - 1] > array[rotated]) break;
    if (array[rotated] >= first && array[rotated] >= last) {
      start = rotated + 1;
    } else if (array[rotated] <= first && array[rotated] <= last) {
      end = rotated;
    }
  }

  start = 0;
  end = array.length;

  if (target <= last) {
    start = rotated;
  }
  if (target >= first) {
    end = rotated;
  }

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] < target) {
      start = middle + 1;
    } else if (array[middle] > target) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};
