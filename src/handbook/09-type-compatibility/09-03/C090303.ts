/*
 * Type Compatibility
 *     Comparing two functions
 *         Function Parameter Bivariance
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 默认情况下，函数参数是 bivariance 的，即：
   *     如果 y 可以赋值给 x，那么：
   *         x 的参数可以赋值给 y，
   *         或者 y 的参数可以赋值给 x
   *
   * 在开启 --strictFunctionTypes 时，函数参数是 contravariance 的，即：
   *     如果 y 可以赋值给 x，那么：
   *         x 的参数必须可以赋值给 y
   */

  interface A {
    a: number;
  }

  interface B extends A {
    b: number;
  }

  interface C extends B {
    c: number;
  }

  function fn01(cb: (x: B) => void) {}

  fn01((x: A) => {});

  /*
   * 如果开启了 --strictFunctionTypes
   * 则下面的参数会报错；
   */
  fn01((x: C) => {});
}
