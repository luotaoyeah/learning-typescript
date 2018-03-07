/**
 * Listing 5-38. Extended instance
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class Person {
  constructor(public name: string) {}
}

const person = new Person("tom");

// @ts-ignore:
person.age = 18;

/* {"name":"tom","age":18} */
console.log(JSON.stringify(person)); // tslint:disable-line

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

export {};
