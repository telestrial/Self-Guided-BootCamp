// By stepping through and comparing elements that are next to each other,
// the larget values 'bubble' to the top. Like most sorting algorithms, this
// takes a number of passes related to how many items there are.

const bubbleSort = (arr) => {
  let noswaps = false;
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noswaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noswaps = false;
      }
    }
    if (noswaps) {
      break;
    }
  }
  return arr;
};

const arr = [4, 3, 9, 29, 1, 8, 2, 11, 22, 88, 10, -10, 2, 83, 75, 43, 38];

console.log(bubbleSort(arr));
