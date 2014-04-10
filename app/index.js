var express = require('express'),
    app = express();

app.use("/", express.static(__dirname+"/public"));

app.get('/', function (req, res) {
	var python = require('child_process').spawn(
     'python',
     // second argument is array of parameters, e.g.:
     ["adder.py", req.query.x]
     );

     var output = "";
     python.stdout.on('data', function(data){ 
     	output += data });
     python.on('close', function(code){ 
       if (code !== 0) {  return res.send(500, "OH NO! -- Error code: " + code); }
       return res.send(200, output)
     });
});

var server = app.listen(5000, function() {
    console.log('Listening on port %d', server.address().port);
});