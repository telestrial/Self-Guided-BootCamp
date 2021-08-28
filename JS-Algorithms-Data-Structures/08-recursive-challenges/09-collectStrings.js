// Write a function called collectStrings which accepts an object and returns an array
// of all the values in the object that have a typeof string.

const collectStrings = (obj) => {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
};
