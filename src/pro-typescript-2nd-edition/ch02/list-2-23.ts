/**
 * Listing 2-23. Decorators
 */

function logger(target: Function, key: string, descriptor: PropertyDescriptor) {
  console.log("key:", key); // tslint:disable-line
  console.log("descriptor:", descriptor); // tslint:disable-line
}

class Person {
  @logger
  static run() {
    console.log("Person.run()"); // tslint:disable-line
  }
}

Person.run();

export {};
