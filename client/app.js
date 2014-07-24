var domready = require('domready');

var MainView = require('./views/main');

var app = {
	init: function() {
		domready(function() {
			app.view = new MainView({
				el: document.body
			});
		});
	}
};

window.app = app;
app.init();
