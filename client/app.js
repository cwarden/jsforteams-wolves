var domready = require('domready');

var MainView = require('./views/main');
var Router = require('./router');
var Me = require('./models/me');
var Dispatcher = require('./dispatcher');

var HowlsStore = require('./stores/howls');

var App = {
	init: function() {
		App.me = new Me();

		App.howls = HowlsStore;
		App.Dispatcher = Dispatcher;

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

		Dispatcher.actions.appInit();
	}
};

window.app = App;
App.init();
