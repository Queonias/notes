const express = require('express');
const path = require('path');
require('dotenv').config();

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (_req, res) => {
    res.send('hello word')
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;