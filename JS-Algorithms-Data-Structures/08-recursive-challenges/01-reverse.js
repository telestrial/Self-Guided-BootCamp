// Write a recursive function called reverse which accepts a string and returns
// a new string in reverse.

const reverse = (string) => {
  if (string.length === 0) return string;
  let lastCharacter = string.slice(-1);
  return lastCharacter.concat(reverse(string.slice(0, string.length - 1)));
};

console.log(reverse('This is a test'));
