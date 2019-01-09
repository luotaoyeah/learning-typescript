/*
 * Decorators
 *     Method Decorator
 *         example
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 通过 method decorator 实现日志功能
 */

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = new Proxy(descriptor.value, {
    apply(target: Function, thisArg: any, argArray?: any): any {
      console.log("BEFORE");
      const apply = target.apply(thisArg, argArray);
      console.log("AFTER");
      return apply;
    }
  });
}

class Person {
  @log
  run() {
    console.log("RUN");
  }
}

// BEFORE
// RUN
// AFTER
new Person().run();

export {};
