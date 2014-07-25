var View = require('ampersand-view');
var templates = require('../../build/templates');

module.exports = View.extend({
	template: templates.includes.newHowl,
	autoRender: true,

	events: {
		'submit [role=new-howl]': 'createNewHowl'
	},

	createNewHowl: function(event) {
		event.preventDefault();
		var self = this;
		app.howls.create({
			content: this.get('[name=content]').value,
			createdAt: new Date()
		}, {
			wait: true,
			success: function() {
				self.get('[name=content]').value = '';
			},
			error: function() {
				window.alert('FAILED!');
			}
		});
	}

});
