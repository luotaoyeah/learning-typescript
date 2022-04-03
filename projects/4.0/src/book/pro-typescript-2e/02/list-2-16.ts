/**
 * Listing 2-16. Dynamic module loading
 */

declare function require(module: string): any;

import { Person } from "./list-2-7";

const condition: boolean = true;

if (condition) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const MyPerson: typeof Person = require("./list-2-7");
  const myPerson = new MyPerson("tom");

  console.log(myPerson.name);
}
