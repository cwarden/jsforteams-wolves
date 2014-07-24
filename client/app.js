var domready = require('domready');

var MainView = require('./views/main');
var Router = require('./router');

var app = {
	init: function() {
		app.router = new Router();

		domready(function() {
			app.view = new MainView({
				el: document.body
			});
			app.router.history.start({
				pushState: true
			});
		});
	}
};

window.app = app;
app.init();
