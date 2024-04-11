const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    options: [
        {
            optionName: {
                type: String,
                required: true
            },
            optionValues: [
                {
                    value: {
                        type: String,
                        required: true
                    },
                    priceModifier: {
                        type: Number,
                        required: true
                    },
                    image: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
