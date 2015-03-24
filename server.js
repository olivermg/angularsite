var express = require('express');
var passport = require('passport');
var expressSession = require('express-session');
var bodyParser = require('body-parser');

var staticRouter = express.static(__dirname + '/pub');

var appRouter = express.Router();
appRouter.get('/:action', function(req, res) {
	var action = req.params.action;
	res.render(action + '.jade');
});

var apiRouter = express.Router();
apiRouter.post('/:action', function(req, res) {
	var action = req.params.action;
	var module = require('./app/' + action + '.js');
	module.post(req, res);
});
apiRouter.get('/:action', function(req, res) {
	var action = req.params.action;
	var module = require('./app/' + action + '.js');
	module.get(req, res);
});

var app = express();
app.use(expressSession({secret: 'mySecret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pub', staticRouter);
app.use('/api', apiRouter)
app.use('/', appRouter);
app.get('/', function(req, res) {
	res.render('index.jade');
});


var port = process.env.PORT || 8081;
var server = app.listen(port, function() {
	console.log("listening on " + port + "...");
});

