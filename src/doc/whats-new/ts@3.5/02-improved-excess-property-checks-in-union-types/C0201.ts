/*
 * https://devblogs.microsoft.com/typescript/announcing-typescript-3-5/#improved-excess-property-checks-in-union-types
 *
 * Improved Excess Property Checks In Union Types
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * ts@3.5 中, 对 union type 中多余的属性进行了类型检测,
   * 包括属性名不正确, 以及属性类型不正确
   */

  interface IPoint {
    x: number;
    y: number;
  }

  interface ILabel {
    name: string;
  }

  const thing: IPoint | ILabel = {
    x: 0,
    y: 0,
    name: "x"
  };

  console.log(thing);
}

export {};
