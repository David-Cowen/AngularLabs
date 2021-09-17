const e = require("express");

module.exports = function(req, res) {
    
    var u = JSON.stringify(req.body.username);
    var e = JSON.stringify(req.body.email);
    var b = JSON.stringify(req.body.birthday);
    var a = JSON.stringify(req.body.age);
    var editedUser = (username = u, email = e, birthday = b, age = a)

    res.send(editedUser);

}