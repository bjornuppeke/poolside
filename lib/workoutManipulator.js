module.exports = function () {

	var cheerio = require('cheerio'),
		$ = {},
		pub = {};

	pub.parse = function( body, callback ) {

		var tables = [];

		$ = cheerio.load(body);

		$('.innerEntityTable').addClass('table');

		removeEmptyRows();
		sections = extractRows();

		var content = {
			sections: sections
		};

		callback( content );
	};

	function removeEmptyRows() {

		$('.entityTable > tr').each( function () {
			if ($(this).html().trim() === '') {
				$(this).remove();
			}
		});
	}

	function extractRows() {

		var tables = [],
			sections = [],
			tableWrapper = '<table class="table"><tbody>{tr}</tbody></table>';

		$('.entityTable > tr').each( function (i) {

			if ($(this).find('.sum').html()) {
				sections.sum = $(this).find('.sum').html().trim();

			} else if (i) {
				sections.push({
					iterations: $(this).find('.iterations').html() && $(this).find('.iterations').html().trim().replace(/ /g,''),
					entity: $(this).find('.entity').html() && $(this).find('.entity').html().trim(),
					extra: $(this).find('.extra').html() && $(this).find('.extra').html().trim().toUpperCase(),
					subSum: $(this).find('.subSum').html() && $(this).find('.subSum').html().trim()
				});
			}

			// var table = tableWrapper.split('{tr}').join($(this).html());
			// tables.push(table);
		});

		return sections;
	}

	return pub;
};