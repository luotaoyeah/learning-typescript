/**
 * Listing 4-26. The full real mixins
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

type Constructor<T ={}> = new (...args: any[]) => T;

function Acting<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    act() {
      console.log('I am acting'); // tslint:disable-line
    }
  };
}

function Dancing<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    dance() {
      console.log('I am dancing'); // tslint:disable-line
    }
  };
}

function Singing<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    sing() {
      console.log('I am singing'); // tslint:disable-line
    }
  };
}

class Person {
  name: string = 'cat';

  constructor(name: string) {
    this.name = name;
  }
}

const Actor = Acting(Dancing(Singing(Person)));

const actor = new Actor('tom');

actor.dance();
actor.sing();
actor.act();

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};