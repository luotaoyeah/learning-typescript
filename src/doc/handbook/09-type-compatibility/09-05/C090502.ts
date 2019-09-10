/*
 * Type Compatibility
 *     Classes
 *         Private and protected members in classes
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * class 中的 private 属性和 protected 属性，会影响其兼容性的判断，
   * 具体来说：
   *     如果一个 class 具有 private 属性或者 protected 属性，
   *     则其他的 class 必须具有相同的属性，并且这些属性必须来自相同的父类，
   *     否则它们互不兼容；
   */

  class A {
    private name: string;
  }

  class B extends A {
    age: number;
  }

  class C extends A {
    age: number;
  }

  class D {
    private name: string;
    age: number;
  }

  /*
   * B 和 C 相互兼容
   */
  const b: B = new C();
  const c: C = new B();

  /*
   * B 和 D 虽然具有相同的 private 属性 name，
   * 但是它们的 name 属性不是从同一个父类继承来的，因此不能兼容；
   *
   * TS2322: Type 'D' is not assignable to type 'B'.
   *     Types have separate declarations of a private property 'name'.
   */
  /*
    let b02: B = new D();
    let c02: C = new D();
  */
}

export {};
