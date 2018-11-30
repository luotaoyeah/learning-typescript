/*
 * Advanced Types
 *     Nullable types
 *         Optional parameters and properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当开启 --strictNullChecks 时，
   * optional parameter 和 optional properties 会自动添加 `| undefined` 类型
   */

  function fn01(x?: number) {}

  fn01(9);
  fn01(undefined);

  interface Person {
    name?: string;
  }

  const p01: Person = { name: "foo" };
  const p02: Person = { name: undefined };
}
