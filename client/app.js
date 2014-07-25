var domready = require('domready');

var MainView = require('./views/main');
var Router = require('./router');
var Howls = require('./models/howls');
var Me = require('./models/me');

var app = {
	init: function() {
		app.me = new Me();

		app.howls = new Howls();
		app.howls.fetchRealtime();

		app.router = new Router();

		domready(function() {
			app.view = new MainView({
				el: document.body
			});
			app.router.history.start({
				pushState: true
			});
			app.me.fetch();
		});
	}
};

window.app = app;
app.init();
