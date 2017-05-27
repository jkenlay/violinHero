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

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
    // ...and/or process the entire body here.
  })
});