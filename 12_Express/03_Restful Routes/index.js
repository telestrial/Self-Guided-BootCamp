const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'lolzor',
        comment: 'Mighty harvest is a lame subreddit'
    },
    {
        id: uuid(),
        username: 'Sk8terBoi',
        comment: 'Yo'
    },
    {
        id: uuid(),
        username: 'She',
        comment: 'see ya later, boi'
    },
]

// Begin RESTFUL Routing
// Index for all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

// Serves a form for adding comments
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

// Appends comments with a new one.
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

// SHOW a particular comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})
// END RESTFUL routing

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK. Here are your ${qty} ${meat} taco(s)`)

})

app.listen(3000, () => {
    console.log('On port 3000!')
})
