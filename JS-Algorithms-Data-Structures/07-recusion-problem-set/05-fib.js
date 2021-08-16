// Write a recursive function called fib which accepts a number and returns the nth
// number in the Fibonacci sequence.

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));
