/**
 * Listing 2-14. Export object
 */

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

/*
/!* TS1203: Export assignment cannot be used when targeting ECMAScript modules. Consider using 'export default' or another module format instead. *!/
export = Person;
*/
