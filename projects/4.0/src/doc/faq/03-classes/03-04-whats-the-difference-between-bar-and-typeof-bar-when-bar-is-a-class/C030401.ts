/*
 * Classes
 *     What's the difference between Bar and typeof Bar when Bar is a class ?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *    问什么下面的赋值会报错？
   */

  class Bar {
    foo() {}
  }

  // @ts-ignore
  const bar: Bar = Bar; // TS2741: Property 'foo' is missing in type 'typeof Bar' but required in type 'Bar'.
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *    class 本质上是一个 function，是一个 constructor function，
   *    class 的名称 Bar 代表的就是这个 constructor function，
   *    因此，一个 class 实际上表示了两方面的类型，静态类型和实例类型
   *        静态类型：是构造函数本身的类型，使用 typeof Bar 表示，
   *            这其中包括了类的静态成员的信息，即静态属性和静态方法
   *        实例类型：是类的实例成员的类型，使用 Bar 表示，
   *            这其中包括了实例成员的信息，即原型对象上的属性和方法
   */

  class F01 {
    constructor(public x: number) {}

    static fn01() {}
  }

  /*
   * 下面的接口 F02 表示的就是上面的类 F01 的静态类型
   */
  interface F02 {
    new (x: number): F01;

    fn01: () => void;
  }

  const bar: F02 = F01;
}

export {};
