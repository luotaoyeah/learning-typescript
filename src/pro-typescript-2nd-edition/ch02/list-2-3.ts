/**
 * Listing 2-3. Public and private members
 */

namespace PersonNS {
  export interface IPereson {
    name: string;
    age: number;
  }

  export class Person implements IPereson {
    age: number;
    name: string;

    constructor(age: number, name: string) {
      this.age = age;
      this.name = name;
    }
  }

  const defaultAge = 18;

  class PrivatePerson implements IPereson {
    age: number;
    name: string;

    constructor(age: number = defaultAge, name: string) {
      this.age = age;
      this.name = name;
    }
  }

  export const defaultName = "tom";

  export namespace InnerNS {
    export class InnerPerson {
      static log() {
        /* non exported member can be accessed from within nested namespace */
        console.log("PersonNS.InnerNS.InnerPerson.log()", defaultAge); // tslint:disable-line
      }
    }
  }
}

const person = new PersonNS.Person(19, "tom");

/* 'tom' */
console.log(person.name); // tslint:disable-line

/* 'tom' */
console.log(PersonNS.defaultName); // tslint:disable-line

/* 'PersonNS.InnerNS.InnerPerson.log()' 18 */
PersonNS.InnerNS.InnerPerson.log();

/*
/!* TS2339: Property 'PrivatePerson' does not exist on type 'typeof PersonNS'. *!/
const privatePerson = new PersonNS.PrivatePerson();

/!* TS2339: Property 'defaultAge' does not exist on type 'typeof PersonNS'. *!/
console.log(PersonNS.defaultAge); // tslint:disable-line
*/

export {};
