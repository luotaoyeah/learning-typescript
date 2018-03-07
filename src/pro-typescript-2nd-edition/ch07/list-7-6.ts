/**
 * Listing 7-6. Getting more information from the request
 */

import http from 'http';

http.createServer((request: http.ServerRequest, response: http.ServerResponse) => {
  response.writeHead(200, { 'Conten-Type': 'text/html' });
  response.write(`method: ${request.method}\n`);
  response.write(`url: ${request.url}\n`);
  response.end();
}).listen(8080);

console.log('listening at http://localhost:8080'); // tslint:disable-line


