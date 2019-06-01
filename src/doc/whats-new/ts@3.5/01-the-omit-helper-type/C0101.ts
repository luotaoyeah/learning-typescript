/**
 * https://devblogs.microsoft.com/typescript/announcing-typescript-3-5/#the-omit-helper-type
 *
 * The Omit Helper Type
 *
 */
import chalk from "chalk";

interface IPerson {
  name: string;
  age: number;
  location: string;
}

console.log(
  chalk.red("\n-------------------------------------------------- 01")
);
{
  /*
   * 当我们想从某个 object 中排除某些 property 时, 如何定义这个结果类型?
   * 在 ts@3.5 之前, 我们可以使用 Pick 和 Exclude 类型来实现,
   * 如下: 我们想排除 location 属性
   */

  type RemainingKeys = Exclude<keyof IPerson, "location">;
  type IPerson02 = Pick<IPerson, RemainingKeys>;

  const person: IPerson02 = { name: "x", age: 9 };
  console.log(person);
}

console.log(
  chalk.green("\n-------------------------------------------------- 01")
);
{
  /*
   * 对上面的步骤进行简化
   */

  type IPerson02 = Pick<IPerson, Exclude<keyof IPerson, "location">>;
  const person: IPerson02 = { name: "x", age: 9 };
  console.log(person);
}

export { IPerson };
