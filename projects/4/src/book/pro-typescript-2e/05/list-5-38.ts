/**
 * Listing 5-38. Extended instance
 */

console.log("----------");

class Person {
  constructor(public name: string) {}
}

const person = new Person("tom");

// @ts-ignore:
person.age = 18;

/* {"name":"tom","age":18} */
console.log(JSON.stringify(person));

console.log("----------");

export {};
