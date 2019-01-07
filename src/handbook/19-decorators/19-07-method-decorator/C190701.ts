/*
 * Decorators
 *     Method Decorator
 */

console.log("\n-------------------------------------------------- 01");

/*
 * method decorator 可以用在静态方法和实例方法上面
 */

function enumerable(value: boolean) {
  /*
   * method decorator 接收三个参数：
   *     第一个参数：
   *         如果是静态方法，则是类的构造函数
   *         如果是实例方法，则是类的原型对象
   *     第二个参数：
   *         方法名称
   *     第三个参数：
   *         方法的属性描述符
   */
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Person {
  @enumerable(true)
  sleep() {}

  @enumerable(false)
  run() {}
}

console.log(
  Reflect.getOwnPropertyDescriptor(
    Reflect.getPrototypeOf(new Person()),
    "sleep"
  )!.enumerable
); // true
console.log(
  Reflect.getOwnPropertyDescriptor(Reflect.getPrototypeOf(new Person()), "run")!
    .enumerable
); // false

export {};
