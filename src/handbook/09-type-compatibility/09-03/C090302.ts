/*
 * Type Compatibility
 *     Comparing two functions
 *         return type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 function 的 return type，
   * 如果 y 可以赋值给 x，则 y 的返回必须可以赋值给 x 的返回；
   * 即：返回类型必须兼容；
   */

  let x = () => ({ name: "foo" });
  let y = () => ({ name: "foo", age: 18 });

  x = y;
}
