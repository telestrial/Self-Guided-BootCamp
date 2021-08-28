// Write a recursive function called capitalizeWords. Given an array of words, return
// a new array containing each word capitalized.

const capitalizeWords = (arr, index = arr.length) => {
  if (index - 1 < 0) {
    return arr;
  }

  if (typeof arr[index - 1] === 'string') {
    arr[index - 1] = arr[index - 1].toUpperCase();
    return capitalizeWords(arr, index - 1);
  }
};

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(words));
