var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.render('index.jade');
});
app.get('/welcome', function(req, res) {
	res.render('welcome.jade');
});
app.get('/app', function(req, res) {
	res.render('app.jade');
});
app.get('/main', function(req, res) {
	res.render('main.jade');
});
app.get('/settings', function(req, res) {
	res.render('settings.jade');
});

var server = app.listen(8081, function() {
	console.log("listening...");
});

