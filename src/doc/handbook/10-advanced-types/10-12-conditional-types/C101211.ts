/*
 * Advanced Types
 *     Conditional Types
 *         Type inference in conditional types
 *             infer
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在多个位置使用相同的类型变量名称时，
   * 如果这些位置是协变的（co-variant），则类型变量的实际类型为它们的联合类型
   */

  type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

  type T01 = Foo<{ a: string; b: string }>;
  // @ts-ignore
  const t01: T01 = 0; // TS2322: Type '0' is not assignable to type 'string'.

  type T02 = Foo<{ a: string; b: number }>;
  // @ts-ignore
  const t02: T02 = true; // TS2322: Type 'true' is not assignable to type 'string | number'.
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 在多个位置使用相同的变量名称时，
   * 如果这些位置是逆变的（contra-variant），则类型变量的实际类型为它们的相交类型
   */

  type Foo<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
    ? U
    : never;
  type T01 = Foo<{
    a: (x: string) => void;
    b: (x: number) => void;
  }>;
  // @ts-ignore
  const t01: T01 = 0; // TS2322: Type '0' is not assignable to type 'string & number'.
}

export {};
