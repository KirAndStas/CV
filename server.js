
var host = "localhost";
var port = 9000;
var express = require("express");

var app = express();
app.use('/statics/', express.static(__dirname + '/dist/statics'));
app.use('/', express.static(__dirname + '/dist/builds'));
app.listen(port, host);

console.log('Running server at ' + host + ':' + port + '/');
