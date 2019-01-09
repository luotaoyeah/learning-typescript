/*
 * Advanced Types
 *     Conditional Types
 *         Predefined conditional types
 *             NonNullable<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * NonNullable<T>
   * 从 T 中排除 null 和 undefined
   */

  type T01 = NonNullable<string | null | undefined>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

console.log("\n-------------------------------------------------- 02");
{
  type MyNonNullable<T> = Exclude<T, null | undefined>;
  type T01 = MyNonNullable<string | null | undefined>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

console.log("\n-------------------------------------------------- 03");
{
  type MyNonNullable<T> = T extends null | undefined ? never : T;
  type T01 = MyNonNullable<string | null | undefined>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'string'.
}

export {};
