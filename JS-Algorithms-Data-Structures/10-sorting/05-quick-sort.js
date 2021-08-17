// Like merge sort, exploits the fact that arrays of 0 or 1 element
// are always sorted. Works by selecting one element (the 'pivot') and finding
// the index where the pivot should end up in the sorted array.

// This sorting algorithm's effeciency can shift depending on what pivot you pick.
// Ideally, your pivot is the median value of the data set.

const swap = (arr, id1, id2) => {
  [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

let array = [4, 1, 3, 5, 2, -1, 100, 38, 43, 8, 7, 6];

console.log(quickSort(array));
