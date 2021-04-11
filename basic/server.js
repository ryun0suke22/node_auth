
var http = require('http');
var username = 'dave';
var password = 'testpass';
var realm = 'Node Cookbook';

http.createServer(function(req, res){
  var auth, login;

  if(!req.headers.authorization){
    authenticate(res);
    return;
  }

  auth = req.headers.authorization.replace(/^Basic/, '');
  auth = (new Buffer(auth, 'base64').toString('utf8'));

  login = auth.split(':'); // [0]: username, [1]: password

  if(login[0] === username && login[1] === password){
    res.end('I like softy cheese!');
    return;
  }

  authenticate(res);
}).listen(8080);

function authenticate(res){
  res.writeHead(401, {
    'WWW-Authenticate': 'Basic realm="' + realm + '"'
  });
  res.end('Authentication required.')
}

