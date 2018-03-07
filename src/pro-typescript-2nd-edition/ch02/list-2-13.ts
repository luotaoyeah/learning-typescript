/**
 * Listing 2-13. Importing a default
 */

import MyPerson from "./list-2-12";
/* "allowSyntheticDefaultImports": true */
import * as PersonModule from "./list-2-7";

/*
/!* "export 'default' (imported as 'PersonModule') was not found in './list-2-7' *!/
import PersonModule
  from './list-2-7';
*/

const myPerson = new MyPerson();

myPerson.name = "tom";

const person = new PersonModule.Person("tom");

console.log(person.name); // tslint:disable-line

export {};
