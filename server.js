const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require("mongoose");//mongodb connection
const router = express.Router(); //an app of type express
const app = express();


app.set('view engine','pug')//using pug sets view engine
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //calls body parser


//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true});

const photoRoutes = require('./routes/photoRoutes');
app.use('/upload', photoRoutes)

app.listen(3001, function(){
    console.log('listening on 3001') //to check the changes in your app
})