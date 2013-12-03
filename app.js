var express = require('express'),
	app = express(),
	controller = require('lib/controller')();

app.get('/', function (req, res) {
	controller.index(req, res);
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});