var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/menu', function (req, res) {
    res.sendFile(__dirname + 'menu.html');
});

app.get('/product', function (req, res) {
    res.sendFile(__dirname + 'product.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + 'contact.html');
});

http.listen(1337, function () {
    console.log('listening on *:1337');
});