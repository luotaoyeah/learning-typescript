/**
 * Improvements for ReadonlyArray and Readonly Tuples
 *     Caveats
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * array 的类型标注有两种形式：
   *     shorthand syntax: string[]
   *     generic syntax: Array<string>
   *
   * 新的 readonly array 语法，只能用于 shorthand syntax，不能用于 generic syntax
   */

  const arr01: readonly string[] = [];

  /*
   * 下面 readonly 的用法是错误的，
   * 对于只读泛型数组，应该使用 ReadonlyArray<T> 类型
   */

  // @ts-ignore: TS1354
  const arr02: readonly Array<string> = [];
}

export {};
