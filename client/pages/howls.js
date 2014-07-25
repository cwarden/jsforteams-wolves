var View = require('ampersand-view');
var templates = require('../../build/templates');
var HowlView = require('../views/howl');
var NewHowlView = require('../views/new-howl');

module.exports = View.extend({
	template: templates.pages.howls,
	initialize: function() {
		this.collection = app.howls;
	},
	render: function() {
		this.renderWithTemplate();

		var newHowlView = new NewHowlView({
			el: this.getByRole('new-howl')
		});
		newHowlView.render();

		this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
	}
});

