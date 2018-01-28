/**
 * Created by Ankit on 28/01/18.
 */

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname, "/views")));
app.use(bodyParser.json());


app.post('/signin', function (req, res) {
    var user_name = req.body.email;
    var password = req.body.password;
    if (user_name == 'admin' && password == 'admin') {
        res.send('success');
    }
    else {
        res.send('Failure');
    }
});

app.post('/signup', function (req, res) {

    var name = req.body.name;
    var username = req.body.email;
    var password = req.body.password;
    res.send('your details are recieved as name = ' + name + ' email = ' + username);

});

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});