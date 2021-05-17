const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let price of price) {
    total += price
}
console.log(total);

const total = price.reduce((total, price) => {
    return total + price
})

const totalOneLine = price.reduce((total, price) => total + price);

// Not just math like +, -, *, /
// Can also find greatest or least.

const minPrice = price.reduce((min, price) => {
    if (price < min) {
        return price;
    } else {
        return min;
    }
})

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    } else {
        return bestMovie;
    }
})

// bestMovie starts at nothing. currMovie is iterating over each value.

const evens = [2, 4, 6, 8];

// Second value in function can be starting point.
evens.reduce((sum, num) => sum + num, 100);