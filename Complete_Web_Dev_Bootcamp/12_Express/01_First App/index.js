const express = require('express')
const app = express()

// app.use((req, res) => {
//     console.log('We got a new request')
//     res.send('<h1>This is my webpage!</h1>')

// })
app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit with ID: ${postId}</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!!')
})

app.get('/search/', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched.')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that route or path.`)
})



// This must be at the end of routes as a general 
// 'catchall' for 404s
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})

