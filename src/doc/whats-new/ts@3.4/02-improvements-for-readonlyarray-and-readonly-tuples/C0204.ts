/**
 * Improvements for ReadonlyArray and Readonly Tuples
 *     Caveats
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 新的 readonly array 语法，只能用于 shorthand syntax array（string[]），不能用于泛型数组（Array<string>）
   */

  const arr01: readonly string[] = [];

  // @ts-ignore: TS1354
  const arr02: readonly Array<string> = [];
}

export {};
