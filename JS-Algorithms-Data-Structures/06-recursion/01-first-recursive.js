// Base Case - The condition by which recursion ends.
// Different input - the recursive call must be called without different data.

const countDown = (num) => {
  // Base Case
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  // Doing something
  console.log(num);
  // Ensuring different input
  num--;
  // Calling recursively with different input
  countDown(num);
};

countDown(5);
