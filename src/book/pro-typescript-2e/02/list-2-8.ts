/**
 * Listing 2-8. Importing modules
 */

import * as PersonModule from "./list-2-7";

class Student extends PersonModule.Person {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

const student = new Student("tom", 18);

console.log(student);

export {};
