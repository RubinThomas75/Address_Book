//Server

const http = require('http');

const requestHandler = require('./Address_Book.ts');

//have an enviorment variable or just set it to 3000
const port = process.env.PORT || 3000;

const server = http.createServer(requestHandler);

server.listen(port);

