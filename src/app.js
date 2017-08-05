var http = require('http');
var port = process.env.PORT || 3000;
var url = require('url');
var exec = require('child_process').exec;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var emailer = require('./mailer.js');

app.use(express.static('dist'));
app.use(bodyParser.json());


// a = (2)1/12

// let a = 196 * Math.pow(2,1/12); //1 note up
// let b = 196 * Math.pow(2,2/12); // 2 notes up
// let c = 196 * Math.pow(2,3/12); // 3 notes up
//next G up is 392
//GS = a 207.65 =   k 196 * b 2^(c 1/12)

// c = log(b)*a



function isNoteAMatch(inputfreq, currentFreq){ 
    //let testA = Math.log(2*(1/12));
    let testA = 12*(Math.log2(inputfreq/currentFreq));
    console.log('Test: '+testA);
}
isNoteAMatch(392,196);



let G = 196;
let G2 = 196*Math.pow(2,1/12);

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