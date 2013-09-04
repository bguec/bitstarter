var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

  var indexFile;
  fs.readFile('./index.html', function (err, data) {
    if (err) throw err;
    indexFile = new Buffer(data).toString();
  });

app.get('/', function(request, response) {	

  response.send(indexFile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
