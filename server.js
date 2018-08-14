//Server
var http = require('http');
var requestHandler = require('./Address_Book.ts');
//have an enviorment variable or just set it to 3000
var port = process.env.PORT || 3000;
var server = http.createServer(requestHandler);
server.listen(port);
