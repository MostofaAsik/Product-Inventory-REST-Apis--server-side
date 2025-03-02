const express = require('express');
const Product = require('../models/Product');
const productRouter = express.Router();



productRouter.post('/api/products', async (req, res) => {
    const { name, price, category, stock, description } = req.body;
    console.log(req.body);
    try {
        const newProduct = new Product({
            name,
            price,
            category,
            stock,
            description,
        });
        console.log(newProduct);
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = productRouter;

