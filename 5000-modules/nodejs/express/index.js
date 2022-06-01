const express = require('express');
const app = express();
const port = 3000; // sets the port value in a variable for easy changing if needed

var users = ['Sava', 'Veljko', 'Jia', 'Yongxin', 'Harry'];

app.get('/', function (req, res) { // .get() route, "/" looks for the default route, it could be "/list" too for example to point to another route.
    res.send('Hello world!')
});

app.get('/nodemon', function (req, res) {
    res.send("Hi I'm nodemon")
});

app.get('/users', function (req, res) {
    res.send("The students present are: " + users.join(', '));
});

app.get('/user/:userId', function (req, res) { // paramater (dynamic route) is selected with :
    res.send('Student number ' + req.params.userId + ' is ' + users[req.params.userId]); // request the parameter userId
});

app.get('/html', function (req, res) {
    res.send
    (`
    <h1 style="color: red">Hi there!</h1>
    <p>Lorem ipsum</p>
    <p>Other paragraph</p>
    `)
});

app.get('/studentsFormatted', function (req, res) {
    var studentsFormatted = "<ul>";

    for (let i = 0; i < users.length; i++) {
        studentsFormatted += "<li>" + users[i] + "</li>"
    }

    studentsFormatted += "</ul>"

    res.send(studentsFormatted)
})

app.use('/static', express.static('public'));

app.listen(port, function() {console.log('The server is running on http://localhost:' + port);}) // the 3000 is the port value, common use is to use from 3000 and up
// Add a console.log including the link & port for convenient clicking in the terminal