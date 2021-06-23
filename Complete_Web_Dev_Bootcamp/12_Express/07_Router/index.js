const express = require('express')
const app = express();
const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

app.use('/breeders', shelterRoutes); // Prefixes routes in /routes/shelters.
app.use('/dogs', dogRoutes); // Cuts down on duplication/makes it easier to read/maintain.
app.use('/', adminRoutes)

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})