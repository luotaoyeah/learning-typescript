/**
 * Listing 1-84. Uninitialized property
 */

class Person {
  name: string = "";
  age: number;
}

const person = new Person();

/* true */
console.log("name" in person);

/* uninitialized property won't appear in compiled javascript code */
/* false */
console.log("age" in person);

export {};
