/*
 * Decorators
 *     Parameter Decorator
 */

console.log("\n-------------------------------------------------- 01");
/*
 * parameter decorator 可以用在构造函数，静态方法，实例方法的参数上面
 */

/*
 * 跟 property decorator 一样，
 * parameter decorator 只能用来观测某个参数被定义了
 */

/*
 * 第二个参数表示方法的名称
 */

/*
 * 注意 decorator 的解析顺序：
 *    实例的 property，accessor，parameter，method
 *    静态的 property，accessor，parameter，method
 *    constructor parameter
 *    class
 */

// fn02
// fn01
// undefined
function required(target: any, key: string | symbol, index: number) {
  console.log(key);
}

class Person {
  constructor(@required public x: string) {}

  static fn01(x: string, @required y: string) {}

  fn02(@required x: string) {}
}

export {};
