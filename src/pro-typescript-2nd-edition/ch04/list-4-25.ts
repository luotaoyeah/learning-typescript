/**
 * Listing 4-25. Real mixins
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

type Constructor<T = {}> = new (...args: any[]) => T;

function Acting<T extends Constructor>(BassClass: T) {
  return class extends BassClass {
    message: string = "tom";

    act() {
      console.log("I am acting, message is", this.message); // tslint:disable-line
    }
  };
}

class Person {
  name: string = "cat";

  constructor(name: string) {
    this.name = name;
  }
}

const Actor = Acting(Person);

const actor = new Actor("cat");

actor.act();

console.log("actor.name:", actor.name); // tslint:disable-line

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
