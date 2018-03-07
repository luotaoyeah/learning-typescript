/**
 * Listing 2-10. Imported members with an alias
 */

import { Person as MyPerson } from './list-2-7';

class Student extends MyPerson {
  score: number;

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }
}

const student = new Student('tom', 100);

console.log(student); // tslint:disable-line

export {};