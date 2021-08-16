// 4! = 4 * 3 * 2 * 1

// Non-recursive, iterative solution
const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return i;
};

// Recursive
const rFactorial = (num) => {
  if (num === 1) return 1; // Without this, we get an endless loop into neg nums.
  return num * rFactorial(num - 1);
};

console.log(rFactorial(10));
