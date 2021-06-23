console.log('Sending request to server!')

setTimeout(() => {
    console.log('Here is your data from the server...')
}, 3000)

console.log('I am at the end of the file.')

// Why does 'I am at the end..' go before 'Here is your data..' ?
// The browser does this. It's not written in javascript. JS hands off
// certain tasks to the browser to take care of. It says to the browser
// 'hey tell me when 3000ms is up and I'll run this function.'