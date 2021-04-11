var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var crypto = require('crypto');

var userStore = {};
var app = express();

//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
  res.sendFile('regform.html', {root: __dirname});
});

app.post('/', function(req, res){
  if(req.body && req.body.user && req.body.pass){
    // use hmac hash instead normal md5.
    // prevent rainbow-table attack.
    var hash = crypto
      .createHash('md5', 'supersecretkey')
      .update(req.body.pass)
      .digest('hex')
    userStore[req.body.user] = hash;
    res.send('Thanks for registration!' + req.body.user + '-san!');
    console.log(userStore);
  }
});

http.createServer(app).listen(8080);

