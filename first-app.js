const http = require('http');
const routesHandler = require('./routes');

const server = http.createServer(routesHandler.handler);

server.listen(4200);