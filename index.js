/**use require express(a package which helps us view our app on browser) - 
 * require: is a keyword 
 * 
 * */
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require("mongoose");//mongodb connection

const app = express(); //an app of type express

app.set('view engine','pug')//using pug sets view engine
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //calls body parser

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test");

//schema db definition
const registerSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:'Please Enter your first name'
    },
    last_name: String,
    email: String,
    gender: String,
    city: String,
    country: String,
});
//create an instance of a  model-model helps u piratically save ur data attaches collection
const Register = mongoose.model("Register", registerSchema) //User-is a collection(table) nameSchema is the data


//render  your pug form   -- a get method first, shows ur page 
app.get('/register', (req, res) => {
    res.render('register')
})

//saving to database
app.post("/register", (req, res) => {  //extracts data to display
    const register = new Register(req.body);//User is our model - passing form-data entered req.body is the record/document
    register.save()
    .then(item => {  //promise whether it saves or not - asynchronous
        Register.find().then(  //find all queries in the model
            items =>{          // item is a variable
                res.render('list', {users:items});  //it should show all documents/record in the model  - list is another paage
            })
       })
      .catch(err => {
        res.status(500).send("Unable to save to database");
      });
})

/**use listen method to  create a server so browser can listen - the 3000:is a port*/
app.listen(3000, function(){
    console.log('listening on 3000') //to check the changes in your app
})