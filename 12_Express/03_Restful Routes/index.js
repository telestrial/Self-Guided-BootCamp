const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
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

// Begin CRUD Implementation
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

// Update a comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

// Destroy a comment. BEEP BOOP!
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})
// END CRUD Implementation

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
