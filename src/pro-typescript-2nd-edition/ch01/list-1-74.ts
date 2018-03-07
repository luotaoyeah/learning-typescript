/**
 * Listing 1-74. Property getters and setters
 */

class Person {
  private _name: string = "cat";

  get name(): string {
    console.log(`get name: ${this._name}`); // eslint-disable-line
    return this._name;
  }

  set name(value: string) {
    console.log(`set name: ${value}`); // tslint:disable-line
    this._name = value;
  }
}

const person = new Person();

console.log(person.name); // tslint:disable-line
person.name = "tom";
console.log(person.name); // tslint:disable-line

export {};
