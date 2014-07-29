var domready = require('domready');

var MainView = require('./views/main');
var Router = require('./router');
var Howls = require('./models/howls');
var Me = require('./models/me');

var App = {
	init: function() {
		App.me = new Me();

		App.howls = new Howls();
		App.howls.fetchRealtime();

		App.router = new Router();

		domready(function() {
			App.view = new MainView({
				el: document.body
			});
			App.router.history.start({
				pushState: true
			});
			App.me.fetch();
		});
	}
};

window.app = App;
App.init();
