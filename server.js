var express = require('express');

var appRouter = express.Router();
var staticRouter = express.static(__dirname + '/pub');

var app = express();


appRouter.get('/:action', function(req, res) {
	var action = req.params.action;
	res.render(action + '.jade');
});
/*
appRouter.get('/welcome', function(req, res) {
	res.render('welcome.jade');
});
appRouter.get('/app', function(req, res) {
	res.render('app.jade');
});
appRouter.get('/main', function(req, res) {
	res.render('main.jade');
});
appRouter.get('/settings', function(req, res) {
	res.render('settings.jade');
});
*/


app.use('/pub', staticRouter);
app.use('/', appRouter);
app.get('/', function(req, res) {
	res.redirect(301, '/index');
});


var port = 8081;
var server = app.listen(port, function() {
	console.log("listening on " + port + "...");
});

