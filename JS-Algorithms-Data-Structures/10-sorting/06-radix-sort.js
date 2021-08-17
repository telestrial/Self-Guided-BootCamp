// Previous sorts were heavily comparison-based. Lots of 1-to-1. Can we do better?
// Sort of, but not by making comparisons. Comparisons are never better than
// O(log n)

// Radix sort works on lists of numbers. It exploits the fact that information
// about the size of a number is encoded in the number of digits.

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (arr) => {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

const array = [3, 44, 938, 845, 8, 182, 8495, 483, 273, 192, 389, 54, 57];

console.log(radixSort(array));
