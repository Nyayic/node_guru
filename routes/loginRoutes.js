const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router(); 


//display login page
//render  your pug form   -- a get method first, shows ur page 
router.get('/login', (req, res) => {
    res.render('login')
})

// submits a login page information
router.post('/', async(req, res) => {
    try{
        const user = await Register.authenticate(req.body.username, req.body.password);
        res.send("hey " + user.first_name + " " + user.last_name)
    }catch{
        res.send("Login Failed")
        // res.redirect('register')
    }
})
module.exports = router;