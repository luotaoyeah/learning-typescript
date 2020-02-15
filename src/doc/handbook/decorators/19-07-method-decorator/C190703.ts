/*
 * Decorators
 *     Method Decorator
 *         static method decorator
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 对于静态方法，
 * method decorator 的第一个参数是 class 的 constructor
 */

function D(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(target === Person); // true
}

class Person {
  @D
  static run() {}
}

export {};
