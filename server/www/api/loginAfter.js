var fs = require('fs');

module.exports = function(req, res) {
    let userobj = {
        "userid": req.body.userid,
        "username": req.body.username,
        "userbirthdate": req.body.userbirthdate,
        "userage": req.body.userage
    }
    let uArray = [];
    fs.readFile('server/data/extendedUsers.json', 'utf8', function(err, data) {
        if (err) throw err;
        uArray = JSON.parse(data);
        uArray.push(userobj);
        console.log(userobj);

        uArrayjson = JSON.stringify(uArray);
        fs.writeFile('server/data/extendedUsers.json', uArrayjson, 'utf-8', function(err) {
            if (err) throw err;
            res.send(uArray);
        });
    });
}

// class User {
//     constructor(username, birthdate, age, email, password, valid){
//         username = "";
//         birthdate = ""
//         age = ""
//         email = ""
//         password = ""
//         valid = true
//     }
// }

// let dave = new User("dave", 34, "dave@email.com", "123", true)
// let isla = new User("Isla", 3, "isla@email.com", "122", true)
// let mei = new User("mei", 34, "mei@email.com", "124", true)

// var userList = [dave, isla, mei]
// let userData = {
//     "userid": req.body.userid,
//     "username": req.body.username,
//     "userbirthdate": req.body.userbirthdate,
//     "userage": req.body.userage
// }

// console.log("Current user is " + formUser)
// let i = userList.findIndex(user => ((user.userame == formUser) && (user.password == formPass)));
// if (userList[0].username == formUser && formPass) {
//     res.send({"Welcome":true})
// } else if (userList[1].username == formUser && formPass) {
//     res.send({"Welcome":true})
// } else if (userLsit[2].username == formUser && formPass) {
//     res.send({"Welcome":true})
// } else {
//     res.send({"Unauthorised":false})
// }
// }