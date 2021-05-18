// setTimeout
// For when we'd like to pause execution in the middle of our code.

console.log('STOP!')
setTimeout(() => {
    console.log('Wait a minute(3000ms)..')
}, 3000)

console.log('blahblahblah') //will IMMEDIATELY run before timeout finishes

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

// clearInterval(id); to stop