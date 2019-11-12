/**use require express(a package which helps us view our app on browser) - 
 * require: is a keyword 
 * 
 * */
const express = require('express');
const app = express(); //an app of type express
const bodyParser = require('body-parser')
const path = require('path')


//mongodb connection

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test");

//schema db
var nameSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    city: String,
    country: String
});
//create db model
var User = mongoose.model("User", nameSchema)


//using pug
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //calls body parser

/**use listen method to  create a server so browser can listen - the 3000:is a port*/
app.listen(3000, function(){
    console.log('listening on 3000') //to check the changes in your app
})

/**browsers send a get request to the server in order to READ 
 * in express, we handle GET request with a get method
 * app.get(path, callback)
 * path : is an argument for get request-It's anything that comes after your domain name
 * callback: is a function that tells the server what to do when path is matched -- it takes 2 arguments i.e request object & response
*/


//PUG
/*app.post('/register', (req, res) => {
    res.render('index')
})*/



app.get('/', function(req, res){
    res.send('HELLO WORLD')
    
})
//render  your pug form   -- a get method first, 
app.get('/register', (req, res) => {
    //console.log('body', req.body)
    //console.log('Query Params', req.query)
    res.render('register')
})


//database
app.post("/register", (req, res) => {
    var myData = new User(req.body);//User is our model - passing data entered
    myData.save()
    .then(item => {
        res.send("Item saved to database");
      })
      .catch(err => {
        res.status(400).send("Unable to save to database");
      });
})

app.get('/about', (req, res) => {
    //console.log('body', req.body)
    //console.log('Query Params', req.query)
    res.render('about')
})

app.get('/index', (req, res) => {
    //console.log('body', req.body)
    //console.log('Query Params', req.query)
    res.render('index')
})



//post the form
// app.post('/views', (req, res) => {
//     console.log('body', req.body)
//     console.log('Query Params', req.query)
//     //console.log('Your Form has been posted')
   
// })
// app.post('/welcome', (req, res) => {
//     res.send('Hello '+ req.body.first_name + ' Welcome to Node.js')
// })


app.get('/users', (req, res) => {
    res.send('THIS IS A class of ' + req.query.class + ' cohort ' +req.query.cohort)
})



app.get('/get', (req, res) => res.send('THIS IS A GET REQUEST'))

app.post('/post', (req, res) => res.send('THIS IS A POST REQUEST'))

app.put('/put', (req, res) => res.send('THIS IS A PUT REQUEST'))

//app.send('/send', (req, res) => res.send('THIS A SEND REQUEST'))

app.delete('/user', (req, res) => {
    res.send('THIS IS DELETE REQUEST at /user')
})


//to display name on browser
app.get('/users/:name', (req, res) => { //path params
    res.send('Hello! ' + request.params.name)
})

//for custom error messages - all other oe ome before this 
app.get('*', (req, res) => {
    res.send('OPPS! THERE IS AN ERROR')
})





