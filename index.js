//Importing modules - dependencies
const express = require('express');

//Importing routes
const regRoutes = require('./routes/registrationRoute');

//Instantiating the app
const app = express();

//Configurations - for pug
app.set('view engine', 'pug');
app.set('views', './views');

//Using route
app.use('/', regRoutes);

//Handling invalid routes
app.get('*', (req, res) => {
    res.send('404. This page doesnt exist!');
});

//Final line - setting up the app port
app.listen(1000, console.log('Port 1000 is awake'));