/*
 * Type Compatibility
 *     Comparing two functions
 *         return type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 function 的 return type，跟 function 的 parameter 相反，
   * 右边必须是左边的子类，即：函数返回不能缺少（函数参数可以缺少）；
   */

  let x = () => ({ name: "foo" });
  let y = () => ({ name: "foo", age: 18 });

  x = y;
}
