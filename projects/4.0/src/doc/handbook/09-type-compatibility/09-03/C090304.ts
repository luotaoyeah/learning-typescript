/*
 * Type Compatibility
 *     Comparing two functions
 *         Optional Parameters and Rest Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 前置条件：
   *     rest parameter 可以看成是：无限多个 optional parameter
   *
   * optional parameter 不影响函数的兼容性检查；
   */

  function fn01(cb: (x?: any, ...args: Array<any>) => void) {}

  fn01(() => {});
  fn01((x: string) => {
    console.log(x);
  });

  fn01((x: number, y: number) => {
    console.log(x, y);
  });

  fn01((x?: number, y?: number) => {
    console.log(x, y);
  });
}
