const sumRange = (num) => {
  // Base Case
  if (num === 1) return 1;
  // Recursive call with modified input.
  return num + sumRange(num - 1); // If confused, think about the call stack.
};

console.log(sumRange(3));

// The Call Stack
//
//       (base case) return 1     |       1  (1)  * 2 steps up
//                     ^          |                                 sumRange(1)
//       return 2 + sumRange(1)   |   2 + 1 (3)   * 1 step up          ^
//                ^               |                                 sumRange(2)
// return 3 + sumRange(2)         |   3 + 3 (6)   * Original Call      ^
//          6                     |     6
