/*
 * Advanced Types
 *     Intersection Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 相交类型（intersection type），
   * 将多个类型组合为一个类型，新的类型拥有所有类型的属性和方法；
   */

  function extend<T, U>(t: T, u: U): T & U {
    const obj: T & U = {} as T & U;

    for (let k in t) {
      (obj as any)[k] = t[k];
    }

    for (let k in u) {
      if (!obj.hasOwnProperty(k)) {
        (obj as any)[k] = u[k];
      }
    }

    return obj;
  }

  class Person {
    constructor(public name: string) {}
  }

  interface Loggable {
    log: () => void;
  }

  class ConsoleLogger implements Loggable {
    log = () => {
      console.log("ConsoleLogger.log()");
    };
  }

  const obj = extend(new Person("foo"), new ConsoleLogger());
  console.log(obj.name); // foo
  obj.log(); // ConsoleLogger.log()
}
