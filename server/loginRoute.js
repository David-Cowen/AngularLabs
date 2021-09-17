var userArray = [
    new Object({username: "dave", password: "123", birthday:"27/01/1987", age:34, email:"dave@email.com", valid: false}),
    new Object({username: "mei", password: "123", birthday:"29/03/1987", age:34, email:"mei@email.com", valid: false}),
    new Object({username: "isla", password: "123", birthday:"20/12/2017", age:3, email:"isla@email.com", valid: false})
]

module.exports = function(req, res) {
    
    var e = req.body.email;
    var p = req.body.password;

    let i = userArray.findIndex(user =>
        ((user.email == e) && (user.password == p)));
    if (i == -1) {
        res.send({"valid": false});
    } else {
        res.send({"valid":true, user: userArray[i]});
    }
}
