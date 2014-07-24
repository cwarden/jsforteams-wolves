var hapi = require('hapi');

var server = hapi.createServer(8080, 'localhost');

server.start();
