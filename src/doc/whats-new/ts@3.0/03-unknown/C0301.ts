/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 */

/*
 * unknown 跟 any 类似, 但是又有区别:
 *     1. unknown 只能赋值给 unknown 和 any 类型
 *     2. 任何类型都可以赋值给 unknown 类型
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  const x: unknown = 3;

  /*
   * unknown 可以赋值给 unknown 类型
   */
  const y: unknown = x;

  /*
   * unknown 可以赋值给 any 类型
   */
  const z: any = x;

  // @ts-ignore
  const a: number = x; // TS2322: Type 'unknown' is not assignable to type 'number'.
  // @ts-ignore
  const b: object = x; // TS2322: Type 'unknown' is not assignable to type 'object'.
}

console.log(
  chalk.green("\n-------------------------------------------------- 02")
);
{
  /*
   * 任何类型都可以赋值给 unknown 类型
   */
  const a: unknown = null;
  const b: unknown = undefined;
  const c: unknown = 9;
}

export {};
