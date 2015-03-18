var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('Hello World!');
});
app.get('/main', function(req, res) {
	res.render('main.html');
});
var server = app.listen(8081, function() {
	console.log("listening...");
});

