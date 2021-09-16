var express = require('express');
var app = express();

// Cross origin resource sharing to cater for port 4200 to port 3000
var cors = require('cors');
app.use(cors());

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Allows files to be hosted into a public folder
app.use(express.static(__dirname+ '/../dist/week4'));
console.log(__dirname);

var http = require("http").Server(app);
var server = http.listen(3000, function() {
    console.log("Server listening on port: 3000");
});

// app.get('/', function(req, res){
//     res.sendFile(__dirname +"/index.html");
// });

app.post('/login', require('./www/api/login'));
app.post('/loginafter', require('./www/api/loginAfter'));

// var server = app.listen(4200, function () {
//     var host = server.address().address
//     var port = server.address().port
    
//     console.log("Example app listening at http//localhost", host, port)
//  })



// ---------------

// app.get('/', function(req, res){
//     res.sendFile(__dirname+'/www/api/auth.html');
// });

// // Finds the filepath and sends back the .html file to the client when route is hit.
// app.get('/www/api/', function(req, res){
//     res.sendFile(__dirname+'/www/api/auth.html');
// });



// app.post('/authCheck', required('.www/api/route'));

// ---------------

// var users = [
//     {
//         "userName": "David",
//         "birthdate": "27/01/1987",
//         "age": 34,
//         "email": "dave@email.com",
//         "password": "123",
//         "valid": "True"
//     },
//     {
//         "userName": "Isla",
//         "birthdate": "20/12/2017",
//         "age": 3,
//         "email": "isla@email.com",
//         "password": "122",
//         "valid": "True"
//     },
//     {
//         "userName": "Mei",
//         "birthdate": "29/03/1987",
//         "age": 34,
//         "email": "mei@email.com",
//         "password": "124",
//         "valid": "True"
//     }
// ]
// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })


