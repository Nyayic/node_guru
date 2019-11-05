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
    res.send('This is my first node app')
})


/*app.get('/', (request, response) => response.send('This is my first node app'))*/
