/**
 * Listing 1-83. The in property
 */

class Human {
  age: number;

  run() {
    console.log('run()'); // tslint:disable-line
  }
}

class Person extends Human {
  name: string;
}

class Student {
  score: number;

  play() {
    console.log('play()'); // tslint:disable-line
  }
}

const human = new Human();

const person = new Person();

const student = new Student();

/* uninitialized property will not appear in compiled javascript code  */
/* false */
console.log(('age' in human)); // tslint:disable-line

/* false */
console.log(('age' in person)); // tslint:disable-line

/* false */
console.log(('age' in student)); // tslint:disable-line

export {};