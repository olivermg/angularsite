var express = require('express');
var passport = require('passport');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbConfig = require('./app/db.js');


// connect to db:
db = mongoose.connection;
db.on('error', console.error);
mongoose.connect(dbConfig.url);


// router for static content:
var staticRouter = express.static(__dirname + '/pub');

// router for dynamic content (webapp logic):
var appRouter = express.Router();
appRouter.get('/:action', function(req, res) {
	var action = req.params.action;
	res.render(action + '.jade');
});

// router for api:
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

// setup express app:
var app = express();
app.use(expressSession({secret: 'gfasly5oi3h5lkjngf'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pub', staticRouter);
app.use('/api', apiRouter)
app.use('/', appRouter);
app.get('/', function(req, res) { // render index page for requests to '/':
	res.render('index.jade');
});


// start listener:
var port = process.env.PORT || 8081;
var server = app.listen(port, function() {
	console.log("listening on " + port + "...");
});

