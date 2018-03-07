/**
 * Listing 1-85. Obtaining runtime types
 */

class Person {
  name: string;
}

class Student {
  score: number;
}

const person = new Person();
const student = new Student();

console.log('Person:', typeof person); // tslint:disable-line
console.log('Student:', (student.constructor as any).name); // tslint:disable-line

export {};