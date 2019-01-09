/*
 * Advanced Types
 *     Conditional Types
 *         Predefined conditional types
 *             Exclude<T, U>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * TS 标准库中预定义了一些常用的条件类型：
   *     Exclude<T, U> 从 T 中排除可以赋值给 U 的类型
   */

  type T01 = Exclude<string | null | undefined, null | undefined>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

console.log("\n-------------------------------------------------- 02");
{
  type MyExclude<T, U> = T extends U ? never : T;
  type T01 = MyExclude<string | null | undefined, null | undefined>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

export {};
