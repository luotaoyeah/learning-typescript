/*
 * Type System Behavior
 *     How do I prevent two types from being structurally compatible?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     两个不同的类型，但是它们的成员完全一样，
   *     如何实现它们之间的 nominal typing ？
   */

  interface A {
    x: number;
    y: number;
  }

  interface B {
    x: number;
    y: number;
  }

  function fn01(a: A) {
    console.log(a);
  }

  let b: B = { x: 9, y: 9 };
  fn01(b);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     因为 TS 是 structural typing 的，
   *     要实现 nominal typing 必须使用一个俗称为 brand 的特殊成员，
   *     用来区分不同的类型
   */

  interface A {
    _a: any;
    x: number;
    y: number;
  }

  interface B {
    _b: any;
    x: number;
    y: number;
  }

  function fn01(a: A) {
    console.log(a);
  }

  /*
   * 需要注意的是，使用了 brand 成员的话，
   * 那么每次在创建新的对象时，都需要使用 type assertion 进行断言，
   * 因为没有提供那个 brand 成员
   */
  let b: B = { x: 9, y: 9 } as B;
  // TS2345: Argument of type 'B' is not assignable to parameter of type 'A'.
  //   Property '_a' is missing in type 'B' but required in type 'A'.
  // @ts-ignore
  fn01(b);
}

export {};
