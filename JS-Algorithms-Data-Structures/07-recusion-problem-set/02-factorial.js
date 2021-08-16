// Write a function factorial with accepts a number and returns the factorial of
// that number.

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
