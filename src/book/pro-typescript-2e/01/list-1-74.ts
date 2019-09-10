/**
 * Listing 1-74. Property getters and setters
 */

class Person {
  private _name: string = "cat";

  get name(): string {
    console.log(`get name: ${this._name}`); // eslint-disable-line
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value: string) {
    console.log(`set name: ${value}`);
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }
}

const person = new Person();

console.log(person.name);
person.name = "tom";
console.log(person.name);

export {};
