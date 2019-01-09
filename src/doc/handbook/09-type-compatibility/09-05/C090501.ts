/*
 * Type Compatibility
 *     Classes
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * class 据有两方面的特性：instance 和 static，
   * 在考虑 class 的实例的兼容性时，只考虑 instance 方面的兼容性，即：
   *     静态属性，静态方法，构造函数，不影响兼容性；
   * 其他方面，跟 object literal 和 interface 的规则类似；
   */

  class A {
    name: string;

    static age: number = 9;

    constructor(a: number, b: string) {}
  }

  class B {
    name: string;

    static score: number = 99;

    constructor(c: boolean) {}
  }

  let a: A = new B(true);
  let b: B = new A(9, "foo");
}

export {};
