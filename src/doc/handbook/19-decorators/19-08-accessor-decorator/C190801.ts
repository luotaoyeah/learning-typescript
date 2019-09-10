/*
 * Decorators
 *     Accessor Decorator
 */

console.log("\n-------------------------------------------------- 01");

/*
 * accessor decorator 可以用在静态访问器和实例访问器上面
 * accessor decorator 实际上装饰的是该 accessor 的 descriptor
 */

function upper(target: any, key: string, descriptor: PropertyDescriptor) {
  if (descriptor.get) {
    descriptor.get = new Proxy(descriptor.get, {
      apply(t: () => any, thisArg: any, argArray?: any): any {
        const value = t.apply(thisArg, argArray);

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
  get name() {
    return "tom";
  }
}

console.log(new Person().name); // TOM

export {};
