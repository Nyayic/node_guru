/**use require express(a package which helps us view our app on browser) - 
 * require: is a keyword 
 * 
 * */
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require("mongoose");//mongodb connection
const router = express.Router(); //an app of type express
const app = express();

//const Photo = mongoose.model('Photos');

//const Register = mongoose.model('Register', registerSchema)

//middleware  uses app.use i.e bodyParser
//auth - 
//dotenv : is a package to authenticate online databases e.g on mLab
//.env : a variable for database connection, then use require keyword to access the .env
/**routes an be ae to another folder - create js file then put routes in there -- then just require the routes in the index.js
 * allow routes to be exported from their file by adding,
 * router.get('/posts,(req,res)=>{res.send('we are on posts)}) module.exports = router;  express has Router method
 * put import postsRoute to index.js
 * app.use postRoutes
 * cors - help cross domain data sharing (api)or data
 */

app.set('view engine','pug')//using pug sets view engine
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //calls body parser


//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);




// import  routes
const registerRoutes = require('./routes/registerRoutes')
app.use('/register', registerRoutes)

const loginRoutes = require('./routes/loginRoutes')
app.use('/login', loginRoutes)




   // to post form items

/**use listen method to  create a server so browser can listen - the 3000:is a port*/
app.listen(3000, function(){
    console.log('listening on 3000') //to check the changes in your app
})