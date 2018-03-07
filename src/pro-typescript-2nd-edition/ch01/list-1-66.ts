/**
 * Listing 1-66. Practical currying
 */

const log = (source: string) => (message: string) =>
  console.log(source, message); // tslint:disable-line;

const logger = log("tom:");

logger("message 01");
logger("message 02");

export {};
