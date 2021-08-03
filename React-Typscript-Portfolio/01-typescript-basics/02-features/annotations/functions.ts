const add = (a: number, b: number): number => {
  //   return 'This would error out.';
  return a + b;
};

// If you rely on inferrence of return, TypeScript doesn't care if you return at all.
const subtract = (a: number, b: number) => {
  a - b;
};
// Therefore, it's wise to not go this route unless you absolutely have to.

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// No return
const logger = (message: string): void => {
  console.log(message);
};

// Never can be used when you're not expecting to get to the end of the function.
// This is very rare.
const throwError = (message: string): never => {
  throw new Error(message);
  // Other stuff you might do. Again, this is rare.
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// ES2015 - Object destructuring
// const logWeather2 = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };
