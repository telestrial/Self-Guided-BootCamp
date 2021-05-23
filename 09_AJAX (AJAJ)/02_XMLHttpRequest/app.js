const req = new XMLHttpRequest();

req.onload = function () {
    console.log('ALL DONE WITH REQUEST!!')
    const data = JSON.parse(this.response);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log('ERROR!')
    console.log(this.response);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();