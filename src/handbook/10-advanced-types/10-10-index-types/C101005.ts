/*
 * Advanced Types
 *     Index types
 *         Index types and string index signatures
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 index signature（string index signature 或者 number index signature）
   * keyof T 的结果就是 string | number
   * T[K] 的结果就是其属性的类型
   */

  interface Foo<T> {
    [index: string]: number;
  }

  let t01: keyof Foo<number> = 9;
  t01 = "FOO";
  /*
    t01 = true; // TS2322: Type 'true' is not assignable to type 'string | number'.
  */

  let t02: Foo<number>["foo"] = 99;
  /*
    t02 = "FOO"; // TS2322: Type '"FOO"' is not assignable to type 'number'.
  */
}

export {};
