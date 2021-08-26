// Remembering what we've already done.

// Memoization - storing the results of expensive function calls and returning the
// cached result when the same inputs occur again.

const fibbonacci = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibbonacci(n - 1, memo) + fibbonacci(n - 2, memo);
  memo[n] = res;
  return res;
};

console.log(fibbonacci(100)); // Wow.

// Big O
// O(n) - ...generally. But MUCH, MUCH better than without memoization.
