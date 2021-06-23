// Destructuring
// A short, clean syntax to unpack:
// * Values from arrays
// * Properties from objects

const scores = [842894, 738938, 638948, 539219, 489484, 393204];

const highScores = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
// unpacks the first three into discreet variables gold, silver, and bronze.
// put 'the rest' as an array called everyoneElse.

// Destructuring Objects

const user = {
    email: 'harvey@agmail.com',
    password: 'df89df8s9aa',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American Politician',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = ...
// const email = ...
// This is not wonderful.

// const { email, firstName } = user; // must have THAT PROPERTY NAME like this
// // creates individual variables
// const { born: birthYear } = user; // can rename the variable like so

const user2 = {
    email: 'Stacy@agmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const { city, state, died } = user2 // died is undefined because it doesn't exist in object
const { city, state, died = 'N/A' } = user2 // => died = 'N/A'


// Destructuring Params
// 

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// Destructure inside
// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`
// }

// You can destructure ON THE WAY IN:
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}
// Default values can be used all the same.

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
]

// movies.filter((movie) => movie.score > 90)

// Destructuring on the way in:
// movies.filter(({ score }) => score >= 90);

movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}.`;
})