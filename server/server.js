var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.static(__dirname + '/../dist/week4'));

var bodyParser = require("body-parser");
const { userInfo } = require('os');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.urlencoded())

var http = require("http").Server(app);
var server = http.listen(3000, function() {
    console.log("Server listening on port: 3000");
});

// app.get('/', function(req, res) {
//     res.sendFile("C:/Users/Vic/Desktop/Uni Tri 2 2021/Software Frameworks 3813ICT/Week 5/AngularLabs/dist/week4");
// });

app.post('/login', require('./loginRoute'));
// app.post('/profile/' + sessionStorage.getItem(username), require('./accountRoute'))
// app.post('/account', require('./account'))