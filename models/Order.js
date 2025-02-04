// models/Order.js  
const mongoose = require('mongoose');  

const orderSchema = new mongoose.Schema({  
    userId: { type: String, required: true },  
    items: [  
        {  
            productId: { type: String, required: true },  
            quantity: { type: Number, required: true }  
        }  
    ],  
    status: { type: String, default: 'pending' }, // 'pending', 'completed', 'canceled'  
    createdAt: { type: Date, default: Date.now }  
});  

module.exports = mongoose.model('Order', orderSchema);