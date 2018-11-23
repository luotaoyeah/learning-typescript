/*
 * Type Compatibility
 *     Comparing two functions
 *         parameter
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 function 的 compatibility，需要考虑 parameter 和 return type，
   * 对于 parameter，左边必须是右边的子类；
   */

  /*
   * x 的参数类型可以描述为：{ number }
   * y 的参数类型可以描述为：{ number, string }
   * { number, string } 是 { number } 的子类，即 { number, string } 可以赋值给 { number }
   * 所以 x 可以赋值给 y
   *
   * 即：如果 y 的参数可以赋值给 x，那么 x 可以赋值给 y
   */
  let x = (x: number) => 0;
  let y = (a: number, b: string) => 0;

  y = x;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 简单来说，函数参数可以缺少
   * 因为在 JS 中，这种情况非常常见；
   */

  [1, 2, 3].forEach((value: number, index: number, array: Array<number>) => {
    console.log(value, index, array);
  });

  /*
   * 期望的函数参数有三个，传递的函数参数只有一个
   */
  [1, 2, 3].forEach((value: number) => {
    console.log(value);
  });
}
