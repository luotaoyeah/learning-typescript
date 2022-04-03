/*
 * Advanced Types
 *     Conditional Types
 *         Predefined conditional types
 *             Parameters<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Parameters<T>
   * 获取函数的参数类型列表组成的 tuple 类型
   */

  function fn01(x: number, y: string) {}

  type T01 = Parameters<typeof fn01>;
  // @ts-ignore
  const t01: T01 = 0; // TS2322: Type '0' is not assignable to type '[number, string]'.
}

console.log("\n-------------------------------------------------- 02");
{
  type MyParameters<T extends (...args: Array<any>) => any> = T extends (
    ...args: infer U
  ) => any
    ? U
    : never;

  function fn01(x: number, y: string) {}

  type T01 = MyParameters<typeof fn01>;
  // @ts-ignore
  const t01: T01 = 0; // TS2322: Type '0' is not assignable to type '[number, string]'.
}

export {};
