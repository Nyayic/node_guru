const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router(); 
const Register = require('../models/registerModel')

//display register page
//render  your pug form   -- a get method first, shows ur page 
router.get('/', (req, res) => {
    res.render('register')
})



//saving to database
router.post("/", (req, res) => {  //extracts data to display
    const register = new Register(req.body);//User is our model - passing form-data entered req.body is the record/document
    register.save()
    .then(item => {  //promise whether it saves or not - asynchronous
        Register.find().then(  //find all queries in the model
            items =>{          // item is a variable
                res.render('list', {users:items});  //it should show all documents/record in the model  - list is another page
            })
       })
      .catch(err => {
        res.status(500).send("Unable to save to database");
      });
})




module.exports = router;