

module.exports = function(req, res) {
    var e = req.body.formUser.email;
    var p = req.body.formUser.password;
    console.log(e)

    var userArray = [
        {"username": "dave", "birthday":"27/01/1987", "age":34, "email":"dave@email.com", "valid": false},
        {"username": "mei", "birthday":"29/03/1987", "age":34, "email":"mei@email.com", "valid": false},
        {"username": "isla", "birthday":"20/12/2017", "age":3, "email":"isla@email.com", "valid": false}
    ]
    let i = userArray.findIndex(user =>
        ((user.email == e) && (user.password == p)));
    if (i == -1) {
        res.send({"valid": false});
    } else {
        res.send({"valid":true});
    }
}