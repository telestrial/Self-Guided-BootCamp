const mongoose = require('mongoose')
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            author: '60ce9f413914634d3438fee3',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iure minus provident assumenda debitis est mollitia reiciendis impedit ab. Quaerat sequi necessitatibus, aliquid enim incidunt tempora maiores repellat quidem iste!',
            price,
            geometry: {
                coordinates: [-113.1331, 47.0202],
                type: "Point"
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dibyl3p4z/image/upload/v1624309988/YelpCamp/gjnzmrivrhfdngoamvdx.jpg',
                    filename: 'YelpCamp/gjnzmrivrhfdngoamvdx'
                },
                {
                    url: 'https://res.cloudinary.com/dibyl3p4z/image/upload/v1624309988/YelpCamp/ytkuzshwo6bioyuui4s3.jpg',
                    filename: 'YelpCamp/ytkuzshwo6bioyuui4s3'
                },
                {
                    url: 'https://res.cloudinary.com/dibyl3p4z/image/upload/v1624309989/YelpCamp/m1cucaeuizpdkjhla8ls.jpg',
                    filename: 'YelpCamp/m1cucaeuizpdkjhla8ls'
                },
                {
                    url: 'https://res.cloudinary.com/dibyl3p4z/image/upload/v1624309989/YelpCamp/vkudkvjykfc97t85u99l.jpg',
                    filename: 'YelpCamp/vkudkvjykfc97t85u99l'
                },
                {
                    url: 'https://res.cloudinary.com/dibyl3p4z/image/upload/v1624309989/YelpCamp/rhe9ofzdqiwssktes6hq.jpg',
                    filename: 'YelpCamp/rhe9ofzdqiwssktes6hq'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})
