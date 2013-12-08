module.exports = function () {

	var http = require('http'),

		pub = {};

	pub.generateWorkout = function ( callback ) {
		var body = '',
			options = {
				hostname: 'www.farodyne.com',
				port: 80,
				path: '/SwimGenerator/generator.jsp?lang=swe&distance=2000&intensity=Intensivt&style=Snabbhet',
				method: 'POST'
			};

		var req = http.request( options, function(res) {
			res.setEncoding('utf8');

			res.on('data', function ( chunk ) {
				body += chunk;
			});

			res.on('end', function() {
				callback( null, body );
			});
		});

		req.on('error', function(e) {
			callback( e, null );
		});

		// write data to request body
		req.write('data\n');
		req.write('data\n');
		req.end();
	};

	return pub;
};