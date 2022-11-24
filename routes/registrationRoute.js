const express = require('express');
const router = express.Router();

router.get('/registration', (req, res) => {
    res.render('registration');
});

// router.post('/registration', (req, res) => {
//     res.send('/registration');
// });

module.exports = router;
