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

console.log("Person:", typeof person);
console.log("Student:", (student.constructor as any).name);

export {};
