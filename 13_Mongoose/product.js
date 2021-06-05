const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!!!')
    })
    .catch(err => {
        console.log('Error:')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be 0 or higher, dingus.']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

});

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Tire Pump' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))

// findProduct();

// const bike = new Product({ name: 'Cycling Jersey', price: 29.50, categories: ['Cycling'], size: 'L' });

// bike.save()
//     .then(data => {
//         console.log('It worked.')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('OH NO! ERROR!')
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('It worked.')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('OH NO! ERROR!')
//         console.log(err)
//     })