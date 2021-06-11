const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS')
    next();
})

const verifyPassword = (req, res, next) => {
    // Never do this. This isn't authentication.
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('SORRY. YOU NEED A PASSWORD')
}

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to people.')
})

// We can use middleware to catch any non-matching patterns. 404 NOT FOUND, for example.
app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on port 3000, baby.')
})