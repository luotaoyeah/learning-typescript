/*
 * Advanced Types
 *     Conditional Types
 *         Predefined conditional types
 *             Extract<T, U>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Extract<T, U>
   * 从 T 中提取可以赋值给 U 的类型
   */

  type T01 = Extract<string | null | undefined, string>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

console.log("\n-------------------------------------------------- 02");
{
  type MyExtract<T, U> = T extends U ? T : never;
  type T01 = MyExtract<string | null | undefined, string>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

export {};
