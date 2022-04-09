/**
 * Listing 5-39. Sealing an instance
 */

console.log("----------");

class Person {
  constructor(public name: string) {}
}

const person = new Person("tom");

Object.seal(person);

// @ts-ignore:
person.age = 18;
console.log("person is sealed:", Object.isSealed(person));

/* {"name":"tom"} */
console.log(JSON.stringify(person));

console.log("----------");

export {};
