// Split an array into many single-item arrays. Then, compare and merge back into
// increasingly larger arrays until you have the finished, sorted array.

const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100];

const merge = (arr1, arr2) => {
  let mergedArray = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
      mergedArray.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else {
      mergedArray.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  while (arr1Pointer < arr1.length) {
    mergedArray.push(arr1[arr1Pointer]);
    arr1Pointer++;
  }

  while (arr2Pointer < arr2.length) {
    mergedArray.push(arr2[arr2Pointer]);
    arr2Pointer++;
  }

  return mergedArray;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
  // mergeSort()
};

console.log(mergeSort([10, 24, 76, 73]));
