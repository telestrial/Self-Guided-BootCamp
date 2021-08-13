function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(1000000000));

// This runs significantly faster the 01. But why?
// Some of it has to do with the number of simple operations.
// This has far fewer than the loop.
