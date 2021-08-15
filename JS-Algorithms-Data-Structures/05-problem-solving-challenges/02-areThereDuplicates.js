// Implement a function called areThereDuplicates which accepts a variable
// number of arguments and checks whether there are any duplicates among
// the arguments passed in.

const areThereDuplicates = (...args) => {
  let argObj = {};
  for (let i = 0; i < args.length; i++) {
    argObj[args[i]]
      ? (argObj[args.toString()[i]] += 1)
      : (argObj[args.toString()[i]] = 1);
  }
  for (let item in argObj) {
    return argObj[item] > 1;
  }
  return false;
};

console.log(areThereDuplicates());
