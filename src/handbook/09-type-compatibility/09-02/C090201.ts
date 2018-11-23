/*
 * Type Compatibility
 *     Starting out
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * x 跟 y 兼容
   *     等价于：
   * y 具有 x 的所有成员
   *     等价于：
   * y 可以赋值给 x
   */

  interface Named {
    name: string;
  }

  let x: Named;
  /*
   * y 的推断类型为：{ name: string; location: string }
   * y 具有 x 的属性：{ name: string }
   * 因此 x 跟 y 是兼容的
   */
  let y = { name: "foo", location: "chengdu" };
  x = y;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 函数参数的兼容性检查，跟赋值时的兼容性检查一样，遵循同样的规则
   */

  interface Named {
    name: string;
  }

  function fn01(x: Named) {
    console.log(x.name);
  }

  let y = { name: "foo", location: "chengdu" };
  fn01(y); // foo
}
