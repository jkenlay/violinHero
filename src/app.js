var http = require('http');
var port = process.env.PORT || 3000;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/update', secret: '1234567890' });

var exec = require('child_process').exec;

var express = require('express');
var app = express();
app.use(express.static('dist'));

console.log('restarting');

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    console.log('req: ' +req);
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(port);

handler.on('error', function (err) {
  console.error('Error:', err.message)
});

handler.on('push', function (event) {
//   console.log('Received a push event for %s to %s',event.payload.repository.name,event.payload.ref)
    if(event.payload.ref=='refs/heads/master'){
        console.log('master was pushed, attempting to pull');
        var cmd = 'sudo git pull && sleep 5s && sudo git pull';

        exec(cmd, function(error, stdout, stderr) {
            //command output is in stdout
            console.log('from console: ' + stdout);
        });
    }
})

handler.on('issues', function (event) {
    //shouldnt need this but left it for now
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})
