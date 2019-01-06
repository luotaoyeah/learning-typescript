/**
 * Listing 1-82. Using the instanceof operator
 */

class Human {
  age: number;
}

class Person extends Human {
  name: string;
}

class Student {
  score: number;
}

const human = new Human();

const person = new Person();

const student = new Student();

/* true */
console.log(human instanceof Human);

/* true */
console.log(person instanceof Human);

/* false */
console.log(student instanceof Human);

export {};
