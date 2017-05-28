var http = require('http');
var port = process.env.PORT || 3000;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/update', secret: '1234567890' });
var url = require('url');
var exec = require('child_process').exec;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//app.use(express.static('dist'));


app.use(bodyParser.json());

app.post('/update', function (req, res) {
console.log('post req');
    var body = req.body;
    console.log(' why didnt this work before. git hub hook');
    console.log(JSON.stringify(req.body));
    res.json({
        message: 'ok got it!'
    });

    var cmd = 'sudo git pull && sleep 5s && sudo git pull';

    //exec('hello',execCallBack);
});

var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});


console.log('restartaaaaaing');


function execCallBack(err, stdout, stderr){
    if(stdout){
        console.log(stdout);
    }
    if(stderr){
        console.log(stderr);
    }
}
// http.createServer(function (req, res) {aaaaaa
//     console.log("req" + req.url);

//     fs.readFile('./../dist/index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });

//     handler(req, res, function (err) {
//         if (req.url==='/update') {
//             console.log('github update!');
//         }
//         console.log('req: ' +req.url);

//     });
// }).listen(port);


// handler.on('error', function (err) {
//   console.error('Error:', err.message)
// });

// handler.on('push', function (event) {
// //   console.log('Received a push event for %s to %s',event.payload.repository.name,event.payload.ref)
//     if(event.payload.ref=='refs/heads/master'){
//         console.log('master was pushed, attempting to pull');
//         var cmd = 'sudo git pull && sleep 5s && sudo git pull';

//         exec(cmd, function(error, stdout, stderr) {
//             //command output is in stdout
//             console.log('from console: ' + stdout);
//         });
//     }
// })

// handler.on('issues', function (event) {
//     //shouldnt need this but left it for now
//   console.log('Received an issue event for %s action=%s: #%d %s',
//     event.payload.repository.name,
//     event.payload.action,
//     event.payload.issue.number,
//     event.payload.issue.title)
// })
