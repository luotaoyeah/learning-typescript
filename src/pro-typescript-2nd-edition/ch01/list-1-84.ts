/**
 * Listing 1-84. Uninitialized property
 */

class Person {
  name: string = "";
  age: number;
}

const person = new Person();

/* true */
console.log("name" in person); // tslint:disable-line

/* uninitialized property won't appear in compiled javascript code */
/* false */
console.log("age" in person); // tslint:disable-line

export {};
