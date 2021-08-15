// Write a function called sameFrequency. Given two positive integers, find out if
// the two numers have the same frequency of digits.

const sameFrequency = (num1, num2) => {
  let obj1 = {};
  let obj2 = {};
  for (digit of `${num1}`) {
    obj1[digit] ? (obj1[digit] += 1) : (obj1[digit] = 1);
  }
  for (digit of `${num2}`) {
    obj2[digit] ? (obj2[digit] += 1) : (obj2[digit] = 1);
  }
  for (key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(3589578, 5879385));
