// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// The above is fine. It works. It's a bit confusing to look at. We could 
// improve through function:

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('blue', 1000, () => {
            delayedColorChange('yellow', 1000, () => {
                delayedColorChange('green', 1000)
            })
        })
    })
})

// In many implementations, it is common that this sort of pattern will
// emerge whenever we're waiting on something.

// pseudocode:

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movie, () => {
        // if it works, run this.
    }, () => {
        // if it doesn't work, run this.
    })
})

// if you take this out..and maybe the 'doesn't work' function has additional
// callbacks. So on and so forth. This is callback hell.