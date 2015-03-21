var express = require('express');

var appRouter = express.Router();
var staticRouter = express.static(__dirname + '/pub');

var app = express();


appRouter.get('/:action', function(req, res) {
	var action = req.params.action;
	res.render(action + '.jade');
});


app.use('/pub', staticRouter);
app.use('/', appRouter);
app.get('/', function(req, res) {
	res.render('index.jade');
});


var port = 8081;
var server = app.listen(port, function() {
	console.log("listening on " + port + "...");
});

