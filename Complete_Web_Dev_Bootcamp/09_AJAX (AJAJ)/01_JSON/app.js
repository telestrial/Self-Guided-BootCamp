// THIS IS A STRING OF JSON

const data = `{"ticker":{"base":"BTC","target":"USD","price":"37698.63961588","volume":"70741.87038722","change":"-424.58964397"},"timestamp":1621724642,"success":true,"error":""}`

// Because it's a string, it's actually hard to access. can't do data.anything.
// Shouldn't do data[0] to access specific characters. Javascript has built in parser

// instead:

const parsedData = JSON.parse(data);

// and the other direction with stringify.

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

const jsonDog = JSON.stringify(dog);