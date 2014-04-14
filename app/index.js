var express = require('express'),
    zerorpc = require("zerorpc"),
    app = express();

var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

app.use("/", express.static(__dirname+"/public"));

app.get('/', function (req, res) {
    client.invoke("hello", function(error, pyres, more) {
        res.json(200, JSON.parse(pyres));
    });
});

var server = app.listen(5000, function() {
    console.log('Listening on port %d', server.address().port);
});