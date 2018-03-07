/**
 * Listing 2-9. Importing named module members
 */

import { Person } from './list-2-7';

class Student extends Person {
  score: number;

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }
}

const student = new Student('tom', 100);

console.log(student); // tslint:disable-line

export {};