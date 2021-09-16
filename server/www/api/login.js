
var fs = require('fs');
let userobj = require('./userobj')
// userobj = {userid: 1, email: 'dave@emiail.com', username: 'dave', userbirthdate: null, userage: 34};

module.exports = function(req, res){
    var u = req.body.userobj.username;
    var p = req.body.userpass.pass;
    fs.readFile(list, (somestring) =>{res.send().})
    userobj = {userid: 1, email: 'dave@emiail.com', username: 'dave', userbirthdate: null, userage: 34, ok: false};
    if ((userobj.username == u) && (userobj.pass == p)) {
        res.sendFile('./loginAfter')
    } else {
        res.send("unauthorised access");
    }
}
    // fs.readFile('./server/data/users.json', 'utf8', function(err, data) {
    //     if (err) throw err;
    //     let userArray = JSON.parse(data);
    //     console.log(userArray);
    //     let i = userArray.findIndex(userobj =>
    //         ((userobj.username == u) && (userobj.pass == p )));
    //     if (i == -1) {
    //         res.send({"ok":false});
    //     } else {
    //         console.log(userArray[i]);
    //         res.send({"ok":true});
    //     }
//     });
// }
