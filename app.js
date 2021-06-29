require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
require('./database/configDB');

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index.routes'));
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port, () => {
    console.log('Listen on port:', port);
})