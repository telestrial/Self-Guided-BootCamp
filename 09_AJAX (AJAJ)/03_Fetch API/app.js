// The newer, better, shinier way:

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log('RESPONSE, WAITING TO PARSE...', res) // At this point, you're not quaranteed to have body.
        return res.json()
    })
    .then(data => {
        console.log('DATA PARSED:')
        console.log(data.ticker.price)
    })
    .catch(e => {
        console.log('OH NO, ERROR:', e)
    })

// async/await version:

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log('UHOH:', e)
    }

}