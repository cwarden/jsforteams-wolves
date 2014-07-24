var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../../build/templates');

module.exports = View.extend({
	template: templates.body,
	autoRender: true,
	events: {
		'click a[href]': 'handleLinkClick'
	},
	initialize: function() {
		var app = window.app;
		this.listenTo(app.router, 'page', this.handlePage);
	},
	render: function() {
		this.renderWithTemplate();
		this.pages = new ViewSwitcher(this.getByRole('page-container'));
	},
	handlePage: function(pageView) {
		this.pages.set(pageView);
	},
	handleLinkClick: function(event) {
		var aTag = event.target;
		var local = aTag.host === location.host;
		if (local && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
			event.preventDefault();
			app.router.history.navigate(aTag.pathname, { trigger: true });
		}
	}
});
