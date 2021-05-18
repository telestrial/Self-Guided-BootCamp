// Rest
// Inside every function, we have an array-like object that contains all
// arguments passed to the function.

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}
// ... collects the REST of the parameters and puts them into an array.

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}!`)
}