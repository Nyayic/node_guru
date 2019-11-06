/**use require express(a package which helps us view our app on browser) - 
 * require: is a keyword 
 * 
 * */
const express = require('express');
const app = express(); //an app of type express

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

app.get('/', function(req, res){
    res.send('HELLO WORLD')
    
})


app.get('/get', (request, response) => response.send('THIS IS A GET REQUEST'))

app.post('/post', (request, response) => response.send('THIS IS A POST REQUEST'))

app.put('/put', (request, response) => response.send('THIS IS A PUT REQUEST'))

//app.send('/send', (request, response) => response.send('THIS A SEND REQUEST'))

app.delete('/user', (request, response) => {
    response.send('THIS IS DELETE REQUEST at /user')
})


//to display name on browser
app.get('/users/:name', (request, response) => {
    response.send('Hello! ' + request.params.name)
})

//for custom error messages - all other oe ome before this 
app.get('*', (request, response) => {
    response.send('OPPS! THERE IS AN ERROR')
})





