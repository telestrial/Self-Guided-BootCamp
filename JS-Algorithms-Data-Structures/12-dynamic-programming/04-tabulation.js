// Top-down vs. Bottom-up
// Instead of fib(10)..fib(9)..fib(8)..etcetera. We can tabulate from the bottom up:
// fib(1) -> -> -> fib (10), still storing the result.

const fib = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

console.log(fib(100));
