const express = require('express');
const Product = require('../models/Product');
const productRouter = express.Router();

// Get all products
productRouter.get('/api/products', async (req, res) => {
    let { page = 1, limit = 10, category, sort } = req.query;


    category = category ? category.trim() : null;

    console.log('Category:', category); // Debugging

    const filter = category ? { category } : {};
    const sortOptions = sort ? { price: sort === 'asc' ? 1 : -1 } : {};

    try {
        const products = await Product.find(filter)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort(sortOptions);

        res.status(200).json(products);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});


// Get a product by id
productRouter.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a product
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

// Update a product
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
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a product
productRouter.delete('/api/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = productRouter;

