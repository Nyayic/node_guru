/**use require express(a package which helps us view our app on browser) - 
 * require: is a keyword 
 * 
 * */
const express = require('express');
const app = express(); //an app of type express
const path = require('path')

//using pug
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))


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
//render form
app.get('/views', (req,res) => {
    res.render('register')
})

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
app.get('/users/:name', (req, res) => {
    res.send('Hello! ' + request.params.name)
})

//for custom error messages - all other oe ome before this 
app.get('*', (req, res) => {
    res.send('OPPS! THERE IS AN ERROR')
})





