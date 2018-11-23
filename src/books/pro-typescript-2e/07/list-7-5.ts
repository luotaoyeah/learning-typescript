/**
 * Listing 7-5. A simple Node server
 */

import http from "http";

http
  .createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.writeHead(200, { "Conten-Type": "text/plain" });
      response.write("Response Text Here");
      response.end();
    }
  )
  .listen(8080);

console.log("listening at http://localhost:8080");
