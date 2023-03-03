const express = require('express');
const router = express.Router();

//Importing model
const Form = require('../model/Form');

router.get('/registration',  (req, res) => {
    res.render('registration');
});

router.post('/registration', async (req, res) => {
    try{
        let form = new Form(req.body);
        await form.save();
    console.log(req.body);
    res.status(200).send('Posted successfully!');
    }
    catch (error) {
        res.status(400).send("Failed to register")
        console.log(error);
    }
});

module.exports = router;
