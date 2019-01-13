/*
 * Functions
 *     Why can't I use x in the destructuring function f({ x: number }) {  }?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     下面的 function parameter destructuring 中，为什么会报错？
   */

  // @ts-ignore
  function fn01({ x: number }) {
    // @ts-ignore
    console.log(x); // TS2304: Cannot find name 'x'.
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     上面的 destructuring 中，x 表示模式，number 才是真正解构出来的 variable
   */

  function fn01({ x }: { x: number }) {
    console.log(x);
  }
}

export {};
