const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('thisismysecret'))

app.get('/greet', (req, res) => {
    const { name = 'Champ' } = req.cookies;
    res.send(`HEY THERE, ${name}!`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks')
    res.cookie('animal', 'harlequin shrimp')
    res.send('OK. SENT YOU A COOKIE')
})

// Signing a cookie is about verifying the integrity of a cookie. 
// Not about hiding it.
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK. SIGNED YOUR FRUIT COOKIE')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('SERVING!')
})