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
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  /* method can has fewer parameters than the interface specifies */
  public hello(): void {
    console.log("hello() in Person");
  }
}

const person = new Person("tom");
console.log(person.name);
person.hello();

// tslint:disable-next-line:max-classes-per-file
class SeniorStudent extends Person implements IStudent {
  public score: number;
  public age: number;

  constructor(name: string, score: number, age: number) {
    super(name);
    this.score = score;
    this.age = age;
  }

  /* method override */
  public hello() {
    console.log("hello() in SeniorStudent");
  }
}

const seniorStudent = new SeniorStudent("cat", 99, 17);
seniorStudent.hello();

export {};
