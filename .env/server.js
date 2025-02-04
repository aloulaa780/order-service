// server.js  
const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
require('dotenv').config();  

const orderRoutes = require('./routes/orders');  

const app = express();  
app.use(cors());  
app.use(bodyParser.json());  

// Connexion à MongoDB  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log('MongoDB connecté'))  
    .catch(err => console.log(err));  

// Routes  
app.use('/api/orders', orderRoutes);  

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);  
});