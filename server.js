var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');

var server = hapi.createServer(8080, 'localhost');

server.pack.register({
	plugin: moonboots,
	options: {
		appPath: '/{p*}',
		moonboots: {
			main: __dirname + '/client/app.js',
			developmentMode: config.isDev,
			stylesheets: [
				__dirname + '/public/css/bootstrap.css'
			]
		}
	}
}, function() {
	server.start();
	console.log('wolves running');
});

server.start();
