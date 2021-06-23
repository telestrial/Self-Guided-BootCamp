// A Library for making HTTP Requests

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(e => {
        console.log('ERROR:', e)
    })

// In asynnc:

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log('ERROR:', e)
    }
}

// Configuring headers in Axios

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/JSON' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke
    } catch (e) {
        return 'NO JOKE AVAILABLE. SORRY :('
    }

}

btn.addEventListener('click', addNewJoke)