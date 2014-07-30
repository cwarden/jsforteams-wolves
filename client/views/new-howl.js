var View = require('ampersand-view');
var templates = require('../../build/templates');

var Dispatcher = require('../dispatcher');

module.exports = View.extend({
	template: templates.includes.newHowl,
	autoRender: true,

	events: {
		'submit [role=new-howl]': 'createNewHowl'
	},

	initialize: function() {
		Dispatcher.actions.on('newHowlCreated', this.reset, this);
	},

	createNewHowl: function(event) {
		event.preventDefault();
		Dispatcher.actions.newHowl({
			content: this.get('[name=content]').value,
			createdAt: new Date()
		});
	},

	reset: function() {
		this.get('[name=content]').value = '';
	}

});
