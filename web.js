var express = require('express');
var buffer = require('buffer');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(new Buffer(fs.readFileSync('index.html'), "utf-8").toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
