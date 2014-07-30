// Convert an array of action names to an object keyed by action name with
// function values that trigger events on the context object.
module.exports = function(actions) {
	return actions.reduce(function(actionMap, action) {
		actionMap[action] = function() {
			this.trigger.apply(this, [].concat(action, Array.prototype.slice.call(arguments)));
		};
		return actionMap;
	}, {});
};
