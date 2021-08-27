// Write a recursive function call capitalizeFirst. Given an array of string, capitalize
// the first letter of each string in the array.

let res = [];

const capitalizeFirst = (arr) => {
  const capitalizeWord = (str) => {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  };
  if (arr.length === 0) return res;
  res.push(capitalizeWord(arr[0]));
  return capitalizeFirst(arr.slice(1));
};

console.log(capitalizeFirst(['this', 'is', 'an', 'array']));
