// routes/orders.js  
const express = require('express');  
const router = express.Router();  
const Order = require('../models/Order');  

// Ajouter une commande  
router.post('/', async (req, res) => {  
    const { userId, items } = req.body;  

    try {  
        const newOrder = new Order({ userId, items });  
        const savedOrder = await newOrder.save();  
        res.status(201).json(savedOrder);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// Consulter les commandes d'un utilisateur  
router.get('/:userId', async (req, res) => {  
    try {  
        const orders = await Order.find({ userId: req.params.userId });  
        res.status(200).json(orders);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

module.exports = router;