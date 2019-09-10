/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Listing 2-3. Public and private members
 */

namespace PersonNS {
  export interface Iperson {
    name: string;
    age: number;
  }

  export class Person implements Iperson {
    age: number;
    name: string;

    constructor(age: number, name: string) {
      this.age = age;
      this.name = name;
    }
  }

  const defaultAge = 18;

  class PrivatePerson implements Iperson {
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
        console.log("PersonNS.InnerNS.InnerPerson.log()", defaultAge);
      }
    }
  }
}

const person = new PersonNS.Person(19, "tom");

/* 'tom' */
console.log(person.name);

/* 'tom' */
console.log(PersonNS.defaultName);

/* 'PersonNS.InnerNS.InnerPerson.log()' 18 */
PersonNS.InnerNS.InnerPerson.log();

/*
/!* TS2339: Property 'PrivatePerson' does not exist on type 'typeof PersonNS'. *!/
const privatePerson = new PersonNS.PrivatePerson();

/!* TS2339: Property 'defaultAge' does not exist on type 'typeof PersonNS'. *!/
console.log(PersonNS.defaultAge);
*/

export {};
