var config = require('./config/config.json');
var host = config.host;
var port = config.port;
var express = require("express");

var app = express();
app.use('/statics/', express.static(__dirname + '/dist/statics'));
app.use('/', express.static(__dirname + '/dist/builds'));
app.listen(port, host);

console.log('Running server at ' + host + ':' + port + '/');
