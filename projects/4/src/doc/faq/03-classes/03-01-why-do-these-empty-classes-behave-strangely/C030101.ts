/*
 * Classes
 *     Why do these empty classes behave strangely?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     如下，为什么可以将任意类型赋值给 empty class 类型？
   */

  class A {}
  const a: A = 99;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     跟 empty interface 一样，从类型系统的层面来讲，
   *     empty class 就表示没有任何的类型约束，
   *     因此任意类型都可以赋值给 empty class 类型
   *
   *     最佳实践：不要使用 empty interface 和 empty class
   */

  class A {
    private _a: string;
  }

  // @ts-ignore
  const a: A = 99; // TS2322: Type '99' is not assignable to type 'A'.
}

export {};
