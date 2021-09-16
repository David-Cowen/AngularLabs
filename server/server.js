var express = require('express');
var cors = require('cors');
var app = express();


app.use(cors());

app.use(express.static(__dirname + '/../dist/week4'));

var http = require('http').Server(app);
let server = http.listen(3000, function() {
    console.log("Server listening on port 3000.")
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/");
});

// app.get('*', (req, res) => {
//     res.sendFile('C:/Users/Vic/Desktop/Uni Tri 2 2021/Software Frameworks 3813ICT/Week 5/AngularLabs/dist/week4')
// })

app.post('/login', require('./routes/route'));
app.post('/account', require('./routes/accountRoute'))
