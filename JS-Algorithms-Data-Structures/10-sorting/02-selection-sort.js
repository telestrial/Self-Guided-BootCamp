// Similar to bubble, but instead of placing large values into sorted
// position, it places small values into sorted position.

const swap = (arr, id1, id2) => {
  [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) lowest = j;
    }
    if (i !== lowest) swap(array, i, lowest);
  }
  return array;
};

const arr = [4, 3, 9, 29, 1, 8, 2, 11, 22, 88, 10, -10, 2, 83, 75, 43, 38];

console.log(selectionSort(arr));
