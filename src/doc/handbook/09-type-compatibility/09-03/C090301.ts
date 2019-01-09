/*
 * Type Compatibility
 *     Comparing two functions
 *         parameter
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 function 的 compatibility，需要考虑 parameter 和 return type，
   * 对于 parameter，参数个数可以缺少，参数类型必须兼容；
   */

  /*
   * x 的参数类型可以描述为：{ number }
   * y 的参数类型可以描述为：{ number, string }
   * { number } 相比于 { number, string }，参数个数少了（少了 string），并且参数类型是兼容的（number 和 number）
   * 所以 x 可以赋值给 y
   */
  let x = (x: number) => 0;
  let y = (a: number, b: string) => 0;

  y = x;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 简单来说，参数个数可以缺少，参数类型必须兼容
   * 因为在 JS 中，这种情况非常常见；
   */

  [1, 2, 3].forEach((value: number, index: number, array: Array<number>) => {
    console.log(value, index, array);
  });

  /*
   * 期望的函数参数有三个，传递的函数参数只有一个，
   * 但是传递的这一个参数，类型是可以兼容的；
   */
  [1, 2, 3].forEach((value: number) => {
    console.log(value);
  });
}
