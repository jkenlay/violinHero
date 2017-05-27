var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    //res.send('Hello World! eee');
    res.sendFile('views/index.html', { root: __dirname });
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});

app.post('/update', function(req, res){
    console.log('update POST called');
    res.sendFile('views/index.html', { root: __dirname });
});