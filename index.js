//Importing modules - dependencies
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');


//Setting up express session
const expressSession = require('express-session')({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
});


//Importing routes
const regRoutes = require('./routes/registrationRoute');

//Instantiating the app
const app = express();

//Setting up database connections
mongoose.connect(config.database, {
    useNewUrlParser: true
});
const db = mongoose.connection;

//Check connection
db.once('open', function () {
    console.log('Connected to Mongodb')
});

//Check for db errors
db.on('error', function (err) {
    console.error(err);
});

//Configurations - for pug
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware functions
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession);

//Using route
app.use('/', regRoutes);

//Handling invalid routes
app.get('*', (req, res) => {
    res.send('404. This page doesnt exist!');
});

//Final line - setting up the app port
app.listen(1000, console.log('Port 1000 is awake'));