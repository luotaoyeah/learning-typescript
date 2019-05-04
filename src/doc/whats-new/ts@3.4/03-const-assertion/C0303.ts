/**
 * const assertions
 *     Caveat: const assertion can only be applied to literal
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * const assertion 只能用在 literal 后面
   */

  /*
   * 下面的用法是**错误**的
   */
  // @ts-ignore: TS1355: A 'const' assertion can only be applied to a string, number, boolean, array, or object literal.
  let x = (Math.random() < 0.5 ? 0 : 1) as const;

  /*
   * 下面的用法是**正确**的
   */
  let y = Math.random() < 0.5 ? (0 as const) : (1 as const);
}
