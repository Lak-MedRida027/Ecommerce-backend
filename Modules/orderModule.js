const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Order must belong to user'],
    },
    cartItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            quantity: Number,
            price: Number,
            color: String
        }
    ],
    taxPrice: {
        type: Number,
        default: 0,
    },
    shippingAddress:{
        details: String,
        phone: String,
        city: String,
        postalCode: String,
    },
    shippingPrice:{
        type: Number,
        default: 0,
    },
    totalOrderPrice: Number,
    paymentMethod: {
        type: String,
        enum: ['cash', 'card'],
        default: 'cash',
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    paidAt: Date,
    isDelivered:{
        type: Boolean,
        default: false,
    },
    deliveredAt: Date,
},{ timestamps: true });

module.exports = mongoose.model('Order', orderSchema);