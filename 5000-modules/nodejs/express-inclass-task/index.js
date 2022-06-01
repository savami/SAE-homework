const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/loop', function (req, res) {
    var numbersList = "<ul>"

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 != 1) {
            numbersList += "<li>" + i + "</li>"
        } else {
            continue;
        }
    }

    numbersList += "</ul>";

    res.send(numbersList);
});

app.get('/fizzbuzz', function (req, res) {
// dividable by 3 fizz
// dividable by 5 buzz
// by both fizzbuzz

    var fizzBuzzList = "<ul>";

    for (var i = 1; i < 101; i++) {

        if (i % 15 == 0) {
            fizzBuzzList += '<li style="color:red">' + "FizzBuzz: " + i + '</li>'
        } else if (i % 3 == 0) {
            fizzBuzzList += '<li style="color:magenta">' + "Fizz: " + i + '</li>';
        } else if (i % 5 == 0) {
            fizzBuzzList += '<li style="color:green">' + "Buzz: " + i + '</li>'
        }
    }

    fizzBuzzList += "</ul>";

    res.send(fizzBuzzList);
});

app.listen(port, function() {console.log('The server is running on http://localhost:' + port);})