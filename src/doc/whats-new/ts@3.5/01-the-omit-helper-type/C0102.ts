/**
 * https://devblogs.microsoft.com/typescript/announcing-typescript-3-5/#the-omit-helper-type
 *
 * The Omit Helper Type
 */
import chalk from "chalk";
import { IPerson } from "./C0101";

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * ts@3.5 新增了一个 Omit 类型, 用来实现同样的效果,
   * Omit 内部就是使用的 Pick + Exclude 来实现的, 用法如下:
   */

  type IPerson02 = Omit<IPerson, "location">;
  const person: IPerson02 = { name: "x", age: 9 };
  console.log(person);
}

export {};
