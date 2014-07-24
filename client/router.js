var Router = require('ampersand-router');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'howls': 'howls'
	},

	home: function() {
		console.log('you are home');
	},

	howls: function() {
		console.log('you are reading howls');
	}

});
