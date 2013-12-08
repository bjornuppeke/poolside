module.exports = function() {

	var workoutService = require('./workoutService.js')(),
		workoutManipulator = require('./workoutManipulator.js')(),
		pub = {};

	pub.index = function(req, res) {
		res.render('index');
	};

	pub.workout = function(req, res) {
		workoutService.generateWorkout( function( err, body ) {

			if (err) {
				console.log('Error: ', e.message);
				return;
			}

			workoutManipulator.parse( body, function ( content ) {
				res.render('workout', content);
			});
		});
	};

	return pub;
};