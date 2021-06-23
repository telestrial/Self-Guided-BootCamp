const express = require('express')
const app = express();
const User = require('./models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Mongo Connection FAIL!')
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'notagoodsecret' }))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        req.session.user_id = foundUser._id; // Can use this now for operations across app.
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy()
    res.redirect('/login')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('NOT JUST SECRET...TOP SECRET!')
})

app.listen(3000, () => {
    console.log('Serving it up on 3000')
})