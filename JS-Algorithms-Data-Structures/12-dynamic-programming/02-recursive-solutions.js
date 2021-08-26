// Fibbonacci Sequence

const fibbonacci = (n) => {
  if (n <= 2) return 1;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
};

console.log(fibbonacci(1));
console.log(fibbonacci(2));
console.log(fibbonacci(3));
console.log(fibbonacci(4));
console.log(fibbonacci(5));
console.log(fibbonacci(6));
console.log(fibbonacci(7));
console.log(fibbonacci(8));

// Big O
// O(~2^n) - "Close to Exponential" ...in other words: bad. real bad.

// Each step of this considerably grows the call stack, and there is lots of reptition.
// Fib(6) would do fib(4) twice. There are optimizations here if we can just remember
// the answer to computations we've already done.
