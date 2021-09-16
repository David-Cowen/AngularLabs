var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/api'));

let server = http.listen(3000, function() {
    console.log("Server listening on port 3001.")
});

app.get('*', (req, res) => {
    res.sendFile('C:/Users/Vic/Desktop/Uni Tri 2 2021/Software Frameworks 3813ICT/Assignment/softwareFrameworks/icqu/dist/ICQu/')
})

app.get('/', function (req, res){
    res.sendFile(__dirname + '/login')
})
app.post('/login', require('./routes/route'));
