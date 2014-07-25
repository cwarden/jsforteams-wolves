var View = require('ampersand-view');
var templates = require('../../build/templates');

module.exports = View.extend({
	template: templates.includes.newHowl,
	autoRender: true
});
