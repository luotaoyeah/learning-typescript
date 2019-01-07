/*
 * Decorators
 *     Method Decorator
 *         instance method decorator
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 对于实例方法，
 * method decorator 的第一个参数是类的原型对象属性
 */

function D(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(target === Person.prototype);
}

class Person {
  @D
  run() {}
}

export {};
