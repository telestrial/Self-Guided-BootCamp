// Divide and Conquer!
// Pick a pivot point in the middle, check each side, and determine which side has
// what you're looking for. Not too unlike sliding window.

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === val) return left;
    if (arr[right] === val) return right;

    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) return middle;
    arr[middle] > val ? (right = middle - 1) : (left = middle + 1);
  }
  return -1;
};

const testArr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(binarySearch(testArr, 14));
