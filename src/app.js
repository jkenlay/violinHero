﻿var http = require('http');
var port = process.env.PORT || 3000;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/update', secret: '1234567890' });
var url = require('url');
var exec = require('child_process').exec;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('dist'));
//app.use(bodyParser.json());
//ihuh
app.post('/update', function (req, res) {
    if (req.body.ref=='refs/heads/master') {//later on, will need to use sha1 and compare to header sent by gh
        exec('sudo git pull',execCallBack);
        res.json({
            message: 'ok got it!'
        });   
    }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


console.log('restartaaaaaing');


function execCallBack(err, stdout, stderr){
    if(stdout){
        console.log(stdout);
    }
    if(stderr){
        console.log(stderr);
    }
}//test
