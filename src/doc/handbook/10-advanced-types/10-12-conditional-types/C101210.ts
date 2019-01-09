/*
 * Advanced Types
 *     Conditional Types
 *         Type inference in conditional types
 *             infer
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以在不同的地方，使用相同的类型变量名称，
   * 实际上，它们之间是相互独立的，不会相互冲突
   */

  type UnpackType<T> = T extends () => infer U
    ? U
    : T extends Array<infer U>
    ? U
    : T extends Promise<infer U>
    ? U
    : T;

  function fn01(): number {
    return 9;
  }

  type T01 = UnpackType<typeof fn01>;
  // @ts-ignore
  const t01: T01 = "0"; // TS2322: Type '"0"' is not assignable to type 'number'.

  type T02 = UnpackType<Array<boolean>>;
  // @ts-ignore
  const t02: T02 = 0; // TS2322: Type '0' is not assignable to type 'boolean'.

  type T03 = UnpackType<Promise<string>>;
  // @ts-ignore
  const t03: T03 = 0; // TS2322: Type '0' is not assignable to type 'string'.

  type T04 = UnpackType<undefined>;
  // @ts-ignore
  const t04: T04 = 0; // TS2322: Type '0' is not assignable to type 'undefined'.
}

export {};
