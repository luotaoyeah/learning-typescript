/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     keyof
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * keyof unknown 结果为 never
   */

  type T = keyof unknown;
}

console.log(
  chalk.green("\n-------------------------------------------------- 01")
);
{
  /*
   * keyof any 结果为 string | number | symbol
   */

  type T = keyof any;
}

export {};
