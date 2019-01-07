/*
 * Decorators
 *     Class Decorator
 *         override the constructor
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 如果 class decorator 中返回一个新的构造函数，
 * 则原来的构造函数会被替换为新的构造函数
 */

function Dog<T extends { new (...args: Array<any>): {} }>(Ctor: T) {
  return class {
    log() {
      console.log("DOG");
    }
  };
}

@Dog
class Person {
  log() {
    console.log("PERSON");
  }
}

new Person().log(); // DOG

export {};
