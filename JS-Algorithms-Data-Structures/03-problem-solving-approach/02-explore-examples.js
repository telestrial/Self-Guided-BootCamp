// Come up with examples can help you understand the problem better.
// They also provide sanity checks that your eventual solution works
// how it should.

// Start with simple examples.
// Progress to more complex examples.
// Explore Examples with Empty Inputs.
// Explore Examples with Invalid Inputs.

// "Write a function which takes in a string and returns counts
// of each character in that string."

// 'foo' => {'f': 1, 'o': 2} or [['f', 1], ['o', 2]] or [ {...} {...} ]
// or {[...][...]}

const charCount = (string) => {
  let charCount = {};
  for (char of string) {
    lowerChar = char.toLowerCase();
    if (lowerChar in charCount) {
      charCount[lowerChar] += 1;
    } else {
      charCount[lowerChar] = 1;
    }
  }
  return charCount;
};

console.log(charCount('Hello World! hello world!'));
