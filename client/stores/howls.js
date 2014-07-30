var _ = require('underscore');

var Dispatcher = require('../dispatcher');
var Howls = require('../models/howls');

// Use an ampersand collection as the Howls store
var howlsStore = new Howls();

Dispatcher.actions.on('appInit', howlsStore.fetchRealtime, howlsStore);
Dispatcher.actions.on('newHowl', _(howlsStore.create).partial(_, {
	success: Dispatcher.actions.newHowlCreated
}), howlsStore);

module.exports = howlsStore;
