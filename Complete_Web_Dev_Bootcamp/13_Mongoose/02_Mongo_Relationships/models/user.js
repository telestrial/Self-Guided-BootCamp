const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Mongo Connection FAIL!')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame Street',
        city: 'New York',
        state: 'New York',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id)
    user.addresses.push({
        street: '453 Lemongrass Blvd',
        city: 'Johnson',
        state: 'New York',
        country: 'USA'
    }
    )
    const res = await user.save()
    console.log(res);
}

addAddress('60ca7a8b029ee75068d14ee4');