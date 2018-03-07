/**
 * Listing 1-75. Class heritage
 */

interface IPerson {
  name: string;

  hello(name: string): void;
}

interface IStudent {
  score: number;
}

class Person implements IPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  /* method can has fewer parameters than the interface specifies */
  hello(): void {
    console.log("hello() in Person"); // tslint:disable-line
  }
}

const person = new Person("tom");
console.log(person.name); // tslint:disable-line
person.hello();

class SeniorStudent extends Person implements IStudent {
  score: number;
  age: number;

  constructor(name: string, score: number, age: number) {
    super(name);
    this.score = score;
    this.age = age;
  }

  /* method override */
  hello() {
    console.log("hello() in SeniorStudent"); // tslint:disable-line
  }
}

const seniorStudent = new SeniorStudent("cat", 99, 17);
seniorStudent.hello();

export {};
