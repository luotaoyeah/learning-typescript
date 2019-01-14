/*
 * Classes
 *     When and why are classes nominal?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     class 可以实现 nominal typing 吗？如何实现？
   *     如下，为什么 A 和 B 是类型兼容的，而 C 和 D 不是？
   */

  class A {
    x: number;
  }

  class B {
    x: number;
  }

  class C {
    private x: number;
  }

  class D {
    private x: number;
  }

  let a: A = new A();
  let b: B = new B();
  let c: C = new C();
  let d: D = new D();

  a = b;

  // TS2322: Type 'D' is not assignable to type 'C'.
  //   Types have separate declarations of a private property 'x'.
  // @ts-ignore
  c = d;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 因为 TS 是 structural typing 的，因此 class 在比较类型的时候，
   * 实际上比较的是各个成员是否类型兼容，
   * 但是有一个例外：
   *     对于 private 和 protected 成员，
   *     两个 class 要想类型兼容，则它们的所有 private 和 protected 成员，
   *     必须是从同一个基类继承过来的
   */

  class C {
    protected x: number;
  }

  class D {
    protected x: number;
  }

  let c: C = new C();
  let d: D = new D();
  // TS2322: Type 'D' is not assignable to type 'C'.
  //   Property 'x' is protected but type 'D' is not a class derived from 'C'.
  // @ts-ignore
  c = d;
}
export {};
