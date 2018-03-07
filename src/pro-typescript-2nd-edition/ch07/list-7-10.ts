/**
 * Listing 7-10. General error handler
 */

import express from "express";
import { NextFunction, Request, Response } from "express-serve-static-core";

const app = express();

app.use(function(req: Request, res: Response, next: NextFunction) {
  console.log("middleware01"); // tslint:disable-line
  res.end();
});

app.use(function(req: Request, res: Response, next: NextFunction) {
  console.log("middleware02"); // tslint:disable-line
  next();
});

app.get("/", (request: Request, response: Response) => {
  response.send("tom");
  response.end();
});

app.listen(8080, "localhost", () => {
  console.log("listening at http://localhost:8080"); // tslint:disable-line
});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err); // tslint:disable-line
  res.status(500).send("an error occured");
});
