
var host = "localhost";
var port = 9000;
var express = require("express");

var app = express();
app.use('/', express.static(__dirname + '/build/statics'));
app.listen(port, host);

console.log('Running server at ' + host + ':' + port + '/');
