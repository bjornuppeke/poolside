module.exports = function () {

	var cheerio = require('cheerio'),

		pub = {};

	pub.parse = function( body, callback ) {

		var $ = cheerio.load(body);

			$ = removeEmptyRows( $ );

			$('.entityTable').addClass('table');
			$('.innerEntityTable').addClass('table');

		var content = {
			table: $('.entityTable')
		};

		callback( content );
	};

	function removeEmptyRows ( $ ) {

		$('.entityTable > tr').each( function () {
			if ($(this).html().trim() === '') {
				$(this).remove();
			}
		});

		return $;
	}

	return pub;
};