const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = process.env.PORT || 5000


//middleware
app.use(cors(
    {
        origin: ['http://localhost:5000', 'https://product-inventory-rest-apis-mq5w78lgb-mostofaasiks-projects.vercel.app'],
        credentials: true
    }
));
app.use(bodyParser.json());


//mongodb connection
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rvjkksn.mongodb.net/ProductInventory?retryWrites=true&w=majority`);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

connectDB();

//routes
app.use('/api', productRoutes);



app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Server error' });
});

app.get('/', (req, res) => {
    res.send('Product Inventory ApiS server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
