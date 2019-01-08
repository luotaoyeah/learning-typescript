/*
 * Decorators
 *     Property Decorator
 */

console.log("\n-------------------------------------------------- 01");
/*
 * property decorator 可以用在静态属性和实例属性上面
 * 在 TS 中，class 的 property 并没有定义在 class 的 prototype 属性上面，
 * 而是在实例化对象的时候，直接定义在实例对象上面
 */

/*
 * property decorator 只能用来观测某个属性被定义了
 */

// x
// false
// true
// y
// true
// false
function d(target: any, key: string) {
  console.log(key);
  console.log(target === Person);
  console.log(target === Person.prototype);
}

class Person {
  @d
  x: string = "X";

  @d
  static y: string = "Y";
}

export {};
