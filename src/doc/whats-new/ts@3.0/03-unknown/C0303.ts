/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     Union Type
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * 当 union type 中包含 unknown 类型时,
   * 该 union type 的类型就是 unknown 类型
   */

  /*
   * x 的类型是 unknown 类型
   */
  const x: unknown | null | undefined = "";

  /*
   * 只有当 unknown 和 any 组成 union type 时, 结果类型是 any 类型,
   * 如下, y 的类型是 any 类型
   */
  const y: unknown | any = "";
}

export {};
