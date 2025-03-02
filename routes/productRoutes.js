const express = require('express');
const Product = require('../models/Product');
const productRouter = express.Router();

productRouter.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

productRouter.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

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

productRouter.put('/api/products/:id', async (req, res) => {
    const { name, price, category, stock, description } = req.body;
    const updatedProduct = {
        name,
        price,
        category,
        stock,
        description,
    };
    try {
        await Product.findByIdAndUpdate(req.params.id, updatedProduct);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = productRouter;

