var http = require('http');
var port = 7777;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/update', secret: '1234567890' });


//app.use(express.static(__dirdddname + '/src')); will this workaaaaaaaaaaaaaaaaaa

console.log('app.js running');

http.createServer(function (req, res) {
    console.log('line 12');
  handler(req, res, function (err) {
        console.log('line 14');
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(port)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})

handler.on('issues', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})
