var http = require('http');
var port = process.env.PORT || 3000;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/update', secret: '1234567890' });
var url = require('url');
var exec = require('child_process').exec;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/update', function (req, res) {
    if (req.body.ref=='refs/heads/master') {//later on, will need to use sha1 and compare to header sent by gh
        exec('sudo git pull && uglifyjs src/violinHero.js -o dist/violinhero.js',execCallBack);
        res.json({
            message: 'ok got it!'
        });   
    }
});

app.listen(port, function () {
    console.log('Listening for incoming requests');
});

function execCallBack(err, stdout, stderr) {
    if (stdout) {
        console.log(stdout);
    }
    if (stderr) {
        console.log(stderr);
    }
}