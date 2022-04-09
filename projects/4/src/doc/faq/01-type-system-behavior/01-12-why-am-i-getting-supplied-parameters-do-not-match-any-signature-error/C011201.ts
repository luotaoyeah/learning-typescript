/*
 * Type System Behavior
 *     Why am I getting Supplied parameters do not match any signature error?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     有如下的函数重载（function overloads），
   *     为什么第二个函数调用会报错？
   */

  function fn01(message: string): number;
  function fn01(code: string, message?: string): number {
    return 0;
  }

  fn01("FOO");
  // @ts-ignore
  fn01("FOO", "BAR"); // TS2554: Expected 1 arguments, but got 2.
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     当函数有重载时，函数的重载列表中，最下面那个有具体实现的函数签名，
   *     称之为 implementation signature，是不算在函数的重载列表中的，
   *     即，对于调用者来说，函数签名列表只包括上面那些没有实现的函数签名，
   *     不包括最后一个有实现的函数签名；
   *
   *     因此对于上面的问题来说，函数 fn01() 只有一个函数签名：
   *         function fn01(message: string): number;
   */

  function fn01(message: string): number;
  function fn01(code: string, message?: string): number;
  function fn01(code: string, message?: string): number {
    return 0;
  }

  fn01("FOO");
  fn01("FOO", "BAR");
}

export {};
