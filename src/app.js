﻿var http = require('http');
var port = process.env.PORT || 3000;
var url = require('url');
var exec = require('child_process').exec;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var emailer = require('./mailer.js');

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/update', function (req, res) {
    if (req.body.ref=='refs/heads/master') {//later on, will need to use sha1 and compare to header sent by gh
        //for now it pulls and uglifies, in the future may need to uglify css?
        if(req.body.commits.message){
                    console.log('Commit: ' + req.body.commits.message);
        }
        exec('sudo git pull',execCallBack);
        res.json({
            message: 'ok go'
        });   
    }
});
/* GET users listing. */
app.get('/', function(req, res) {
  //res.send('respond with a resource');
  //console.log('req.url : ' +req.url);

});
app.post('/contactformsubmit', function(req, res) {
    //in future verify with google check thingy
    var message = {
        from: 'Jack Kenlay <jackkenlay@gmail.com>',
        to: 'jackkenlay@gmail.com',
        subject: 'Message From: Violin Hero',
        text: 'Hello World!!'
    }
    emailer.sendEmail(message);
    res.json({
        message: 'ok got it!'
    }); 
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