/*
 * Decorators
 *     Class Decorator
 */

console.log("\n-------------------------------------------------- 01");
/*
 * class decorator 用在 class 上面，
 * 因为 class 本质上是一个 function
 * 因此 class decorator 实际上装饰的是 class 的 constructor
 */

/*
 * class decorator 只接收一个参数，即构造函数
 */
function Log<T extends { new (...args: Array<any>): {} }>(Ctor: T) {
  return new Proxy(Ctor, {
    construct(target: T, argArray: Array<any>): {} {
      const args = argArray.map(i =>
        typeof i === "string" ? i.toUpperCase() : i
      );
      console.log(args);
      return new target(...args);
    }
  });
}

@Log
class Person {
  constructor(public name: string) {}
}

const person = new Person("tom"); // [ 'TOM' ]
console.log(person.name); // TOM

export {};
