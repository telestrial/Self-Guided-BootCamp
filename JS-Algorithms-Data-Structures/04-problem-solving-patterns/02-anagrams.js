// "Given two strings, write a function to determine if the second string
//  is an anagram of the first. An anaagram is a word, phrase, or name formed
//  by rearranging letters from another, such as cinema, formed from iceman."

const str1 = 'mother';
const str2 = 'rehotm';

const anagramChecker = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (const item of str1.split('')) {
    obj1[item] ? (obj1[item] += 1) : (obj1[item] = 1);
  }

  for (const item of str2.split('')) {
    obj2[item] ? (obj2[item] += 1) : (obj2[item] = 1);
  }

  for (const key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(anagramChecker(str1, str2));
