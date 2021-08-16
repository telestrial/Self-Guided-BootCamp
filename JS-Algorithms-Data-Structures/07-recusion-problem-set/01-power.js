// Write a function called power which accepts a base and an exponent. Should return
// the power of the base to the exponent. Recursive.

const power = (base, expo) => {
  if (expo === 0) return 1;
  return base * power(base, expo - 1);
};

console.log(power(2, 2));
