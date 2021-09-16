module.exports = function(req, res) {
    

    var user = {};
    var u = req.body.email;
    var p = req.body.password;
    let i = userArray.findIndex(user => 
        ((user.username == u) && (user.password == p)));
    if (i == -1) {
        res.send({ "valid": false });
    } else {
        res.send({ "valid": true, user: users[i] });
    }

    let userArray =
        [
            {username: "David", birthday: "27/01/1987", age: 34, email: "dave@email.com", password: "123", valid: false},
            {username: "Mei", birthday: "29/03/1987", age: 34, email: "mei@email.com", password: "123", valid: false},
            {username: "Isla", birthday: "20/12/2017", age: 3, email: "isla@email.com", password: "123", valid: false}
        ]
}




      // users = [{
  //   user:"dave",
  //   email:"dave@email.com",
  //   password:"123"
  // },
  // {
  //   user:"Billy",
  //   email:"bill@email.com",
  //   password:"124"
  // },
  // {
  //   user:"Isla",
  //   email:"isla@email.com",
  //   password:"122"
  // }]   