// Write a function called stringifyNumbers which takes an object and finds all of the
// values which are numbers and converts them to strings.

const stringifyNumbers = (obj) => {
  var newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
