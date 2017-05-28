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

    if(req.body.ref=='refs/heads/master'){//later on, will need to use sha1 and compare to header
        exec('sudo git pull',execCallBack);
        setTimeout(function(){
            exec('echo "hi"',execCallBack);
        },5000);//uhiuhiuhiu
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
