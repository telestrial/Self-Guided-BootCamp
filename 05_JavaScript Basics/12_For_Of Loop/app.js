// For..Of

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}

for (let char of 'hello world') {
    console.log(char)
}

