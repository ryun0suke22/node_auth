
var https = require('https');
var fs = require('fs');

// run 'bash make_ssl.sh' and generate self-signed cert.
var opts = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

https.createServer(opts, function(req, res){
  res.end('Secure!');
}).listen(4443); // prod env -> 443
