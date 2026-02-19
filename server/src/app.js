const express = require('express');
const app = express();
const cookies = require("cookie-parser");
const authRoutes = require('./routes/auth.routes'); 
const foodRoutes = require('./routes/food.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cookies());



app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

module.exports = app;