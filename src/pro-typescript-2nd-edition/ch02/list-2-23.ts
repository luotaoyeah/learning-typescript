/**
 * Listing 2-23. Decorators
 */

function logger(target: Function, key: string, descriptor: PropertyDescriptor) {
  console.log("key:", key);
  console.log("descriptor:", descriptor);
}

class Person {
  @logger
  static run() {
    console.log("Person.run()");
  }
}

Person.run();

export {};
