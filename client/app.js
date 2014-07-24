var domready = require('domready');

var MainView = require('./views/main');
var Router = require('./router');
var Howls = require('./models/howls');
var Me = require('./models/me');

var app = {
	init: function() {
		app.me = new Me();
		app.me.fetch();

		app.howls = new Howls();
		app.howls.fetch();
		setInterval(function() {
			app.howls.fetch();
		}, 5000);

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
