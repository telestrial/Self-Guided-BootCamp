// Async functions always return a promise.

// async function hello() {
// }

// const sing = async () => {
//     // throw 'OH NO, PROBLEM'
//     return 'LA LA LA LA'
// }

// // Promise will resolve with what's returned, regardless of what that is. Can 'throw'
// // an error

// sing()
//     .then((data) => {
//         console.log('Promise resolved with:', data)
//     })
//     .cetch(err => {
//         console.log('PROMISE REJECTED')
//         console.log(err)
//     })


const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}

login('adsjfkldasf', 'corgifeetarecute')
    .then(msg => {
        console.log('Logged in!')
        console.log(msg)
    })
    .catch(err => {
        console.log('Error!')
        console.log(err)
    })


// Await

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'ALL DONE!'
}

// rainbow().then(() => console.log("END OF RAINBOW"))

async function printRainbow() {
    await rainbow();
    console.log('End of rainbow!')
}

// printRainbow();

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// async function makeTwoRequests() {
//     let data1 = await fakeRequestPromise('google.com')
//     console.log(data1)
// }

// makeTwoRequests();

// Handling Rejection ='(
// failed awaits will STOP execution

// try {
//     fdjsklas.log('dsfakl')
// } catch (e) {
//     console.log('NO PROB. WE CAUGHT IT.', e)
// }

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('google.com');
        let data2 = await fakeRequestPromise('/fdsh');
        console.log(data1, data2)
    } catch (e) {
        console.log('Caught an error!')
        console.log('Error is:', e)
    }

}