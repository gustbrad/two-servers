// Require/import the HTTP module
var http = require("http");



http.createServer(onRequest_a).listen(7000);
http.createServer(onRequest_b).listen(7500);

function onRequest_a (req, res) {
  res.write("You're Awesome\n");
  res.end();
}

function onRequest_b (req, res) {
  res.write("You're Not Awesome\n");
  res.end();
}


