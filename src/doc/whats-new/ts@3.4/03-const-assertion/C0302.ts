/**
 * const assertions
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * const assertion 的语法形式：
   *     const assertion 就是一个 type assertion
   *     只是在写类型的地方，我们写的是一个 const，如下：
   */

  let x = "foo" as "foo";

  /*
   * const assertion 的作用：
   *     阻止 compiler 对 mutable literal 自动进行 type widening
   *
   * 使用了 const assertion 之后，y 的推断类型就是 "foo"，
   * 不会再自动进行 type widening
   */
  let y = "foo" as const;
}

console.log(
  chalk.yellow("\n-------------------------------------------------- 02")
);
{
  /*
   * const assertion 的实际效果：
   *     1. mutable literal 不再进行 type widening
   *     2. object literal 的属性变为 readonly
   *     3. array literal 的元素变为 readonly
   */

  type T01 = { kind: "foo"; foo: number } | { kind: "bar"; bar: number };

  function fn01(): ReadonlyArray<T01> {
    const result = [
      {
        kind: "foo",
        foo: 0
      },
      {
        kind: "bar",
        bar: 0
      }
    ] as const;

    return result;
  }
}
