/*
 * Advanced Types
 *     Interfaces vs. Type Aliases
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * type alias 不能 implements 或者 extends 其他类型，
   * 也不能别其他类型 implements 或者 extends
   */
  interface Foo {
    value: string;
  }

  type Bar = {
    value: string;
  };

  function getFoo(): Foo {
    return { value: "foo" };
  }

  function getBar(): Bar {
    return { value: "bar" };
  }
}
