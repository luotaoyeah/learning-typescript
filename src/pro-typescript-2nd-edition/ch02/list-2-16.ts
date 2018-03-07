/**
 * Listing 2-16. Dynamic module loading
 */

declare function require(module: string): any;

import { Person } from './list-2-7';

let condition: boolean = true;

if (condition) {
  const MyPerson: typeof Person = require('./list-2-7');
  const myPerson = new MyPerson('tom');

  console.log(myPerson.name); // tslint:disable-line
}

