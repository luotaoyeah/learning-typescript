/*
 * Functions
 *     Optional and Default Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数在调用的时候，实参的个数必须和形参的个数一致，不能多也不能少；
   */

  function fn01(x: string, y: string): void {
    console.log(x, y);
  }

  /*
    fn01("a"); // TS2554: Expected 2 arguments, but got 1.
    fn01("a", "b", "c"); // TS2554: Expected 2 arguments, but got 3.
  */
  fn01("a", "b"); // a b
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 在 JS 中，所有参数都是可选的，当某个参数没有传值时，其参数值为 undefined，
   * 在 TS 中，通过在形参参数名后面加上 ? 将该参数标注为可选的（optional），
   *     当可选参数没有传值时，其参数值为 undefined；
   */

  function fn01(x: string, y?: string) {
    console.log(x, y);
  }

  fn01("a"); // a undefined
  /*
    fn01("a", "b", "c"); // TS2554: Expected 1-2 arguments, but got 3.
  */
  fn01("a", "b"); // a b
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 所有的可选参数必须位于所有的必选参数后面；
   */
  /*
    function fn01(x?: string, y: string) {} // TS1016: A required parameter cannot follow an optional parameter.
  */
}

export {};
