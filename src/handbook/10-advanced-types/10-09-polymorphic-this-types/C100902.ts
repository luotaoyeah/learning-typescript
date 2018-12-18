/*
 * Advanced Types
 *     Polymorphic this types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果方法的返回类型指定为具体的类型，而不是 this 类型，
   * 那么子类在继承该方法之后，
   * 该方法的返回类型仍然是那个具体的类型，而不是当前子类
   */

  class Foo {
    foo(): Foo {
      return this;
    }
  }

  class Bar extends Foo {
    bar(): Bar {
      return this;
    }
  }

  new Bar().foo().bar(); // TS2339: Property 'bar' does not exist on type 'Foo'.
}

export {};
