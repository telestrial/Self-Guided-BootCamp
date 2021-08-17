// Builds up the sort by gradually creating a larger left half which is always
// sorted.

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = array[j];
    }
    arr[j + 1] = currentVal;
  }
  return array;
};

const arr = [4, 3, 9, 29, 1, 8, 2, 11, 22, 88, 10, -10, 2, 83, 75, 43, 38];

console.log(insertionSort(arr));
