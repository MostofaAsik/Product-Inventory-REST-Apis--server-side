const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = process.env.PORT || 5000


//middleware
app.use(cors());
app.use(bodyParser.json());

// app.use(productRoutes);
app.get('/', (req, res) => {
    res.send('Product Inventory ApiS server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
