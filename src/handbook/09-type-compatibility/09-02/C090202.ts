/*
 * Type Compatibility
 *     Starting out
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果类型的成员是其他复杂的类型，则使用同样的规则，递归进行检查；
   */

  interface Foo {
    name: string;
  }

  interface Bar {
    foo: Foo;
  }

  let x: Bar;
  let y = { foo: { name: "foo", age: 18 }, score: 99 };
  x = y;
}
