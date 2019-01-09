/*
 * Decorators
 *     Accessor Decorator
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 因为 accessor decorator 装饰的是 accessor 的 descriptor
 * 而 descriptor 中同时包含 get 和 set
 * 因此，如果同一个属性的 get 和 set 都存在，
 * 则 accessor decorator 只能用在 get 或者 set 上面，不能同时使用
 */

function upper(target: any, key: PropertyKey, descriptor: PropertyDescriptor) {
  if (descriptor.get) {
    descriptor.get = new Proxy(descriptor.get, {
      apply(target: () => any, thisArg: any, argArray?: any): any {
        const value = target.apply(thisArg, argArray);

        if (typeof value === "string") {
          return value.toUpperCase();
        }

        return value;
      }
    });
  }
}

class Person {
  @upper
  set name(value: string) {}

  get name() {
    return "tom";
  }
}

console.log(new Person().name); // TOM

export {};
