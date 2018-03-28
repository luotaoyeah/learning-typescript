/**
 * Listing 7-9. Using multiple routes
 */

import express from "express";
import { Request, Response } from "express-serve-static-core";

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send(`name: ${request.query.name}, age: ${request.query.age}`);
});

app.get("/one/", (request: Request, response: Response) => {
  response.send("one");
});

app.get("/two/", (request: Request, response: Response) => {
  response.send("two");
});

app.listen(8080, "localhost", () => {
  console.log("listening at http://localhost:8080");
});
