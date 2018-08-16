//Server
import * as http from 'http';
import { requestHandle } from './Address_Book';

//have an enviorment variable or just set it to 3000
const port = process.env.PORT || 3000;

const server = http.createServer(requestHandle);

server.listen(port);

