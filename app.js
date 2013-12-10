var express = require('express'),
	exphbs = require('express3-handlebars'),

	app = express(),
	controller = require('./lib/controller.js')();

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'handlebars');
	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
	controller.index(req, res);
});

app.post('/workout', function (req, res) {
	controller.workout(req, res);
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});