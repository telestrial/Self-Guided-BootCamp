const mongoose = require('mongoose')
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Mongo Connection FAIL!')
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Buinda, CA' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' })
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))

