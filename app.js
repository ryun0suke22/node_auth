/**
 * @class       : app
 * @author      : ryunosuke (jhan.k.police@gmail.com)
 * @created     : Saturday Apr 10, 2021 16:12:17 JST
 * @description : app
 */

var http = require('http');
var express = require('express');
var basicAuth = require('basic-auth-connect');
var username = 'dave';
var password = 'testpass';
var realm = 'Node Cookbook';

var app = express();

app.use(basicAuth(function (user, pass){
  return username === user && password === pass;
}, realm));

app.get('/:route?', function (req, res) {
  res.end('I like softy cheese!');
});

http.createServer(app).listen(8080);

