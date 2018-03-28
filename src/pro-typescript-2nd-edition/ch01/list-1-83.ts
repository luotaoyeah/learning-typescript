/**
 * Listing 1-83. The in property
 */

class Human {
  age: number;

  run() {
    console.log("run()");
  }
}

class Person extends Human {
  name: string;
}

class Student {
  score: number;

  play() {
    console.log("play()");
  }
}

const human = new Human();

const person = new Person();

const student = new Student();

/* uninitialized property will not appear in compiled javascript code  */
/* false */
console.log("age" in human);

/* false */
console.log("age" in person);

/* false */
console.log("age" in student);

export {};
