/*
 * Classes
 *     What does it mean for an interface to extend a class ?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     当一个 interface extends 一个 class 时，发生了什么？
   */

  class A {
    static x: string;
    y: number;
  }

  interface B extends A {
    z: number;
  }

  const b: B = { y: 9, z: 9 };
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     当一个 interface extends 一个 class 时，
   *     可以简单地理解为：把这个 class 当成一个 interface 在使用，
   *     即：该 interface 继承了该 class 的实例类型（class 具有静态类型和实例类型）
   */

  class A {
    constructor(y: number) {
      this.y = y;
    }

    static x: number;
    y: number;

    static fn01() {}

    fn02() {}
  }

  type B = A;

  /*
   * 如下，B 继承了 A 的实例类型，因此实例属性 y 和实例方法 fn02() 都必须有，
   * 而静态属性 x 和静态方法 fn01() 没有继承
   */
  const b: B = { y: 9, fn02() {} };
}

export {};
