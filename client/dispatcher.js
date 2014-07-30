var BBEvents = require('backbone-events-standalone');
var _ = require('underscore');

var actionMaker = require('./action-maker');

module.exports = {
	actions:	_.extend(actionMaker([
		'appInit',
		'newHowl',
		'newHowlCreated'
	]), BBEvents)
};
