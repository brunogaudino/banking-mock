var http = require('http');
var express = require('./config/express');
var serverPort = process.env.PORT || 3199;

http.createServer(express).listen(serverPort, function(){
  console.log('Server on port: ' + this.address().port);
});