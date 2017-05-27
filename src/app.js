var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    console.log('get request' + __dirname);
    res.sendFile('views/index.html', { root: __dirname });
});

app.post('/', function(req, res){
    console.log(' POST calaaled: ' + req);
    res.send('errow');
});

app.post('/update', function(req, res){
    console.log('update POST calaaled: ' + req);
    res.send('errow');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});