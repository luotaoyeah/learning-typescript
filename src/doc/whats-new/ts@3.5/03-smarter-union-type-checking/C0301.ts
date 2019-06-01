/*
 * https://devblogs.microsoft.com/typescript/announcing-typescript-3-5/#smarter-union-type-checking
 *
 * Smarter Union Type Checking
 */

import chalk from "chalk";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * 在 ts@3.5 之前, S 不能赋值给 T,
   *     因为 boolean 既不能赋值给 true, 也不能赋值给 false,
   *
   * 在 ts@3.5 之后, S 可以赋值给 T,
   *     因为 boolean 会被分解为 true|false, 就可以赋值给 true|false 了,
   *
   * 如下, 类型 S 可以赋值给类型 T, TS 在进行类型检测的时候,
   *
   * **采用**的方法是: 对 S 进行类型分解, 将 {value:boolean} 分解为 {value:true|false},
   * 再分解为 {value:true}|{value:false}
   *
   * **没有采用**的方法是: 对 T 进行合成, 将 {value:true}|{value:false} 合成为 {value:true|false},
   * 再合成为 {value:boolean}, 因为这种合成会导致问题
   */

  // tslint:disable-next-line:interface-over-type-literal
  type S = { value: boolean };
  type T = { value: true } | { value: false };

  const s: S = { value: true };
  let t: T = { value: false };

  t = s;
}

export {};
