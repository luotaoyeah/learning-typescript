/*
 * Advanced Types
 *     Conditional Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 条件类型（conditional types）的语法为：T extends U ? X : Y
   * 表示：
   *     如果类型 T 可以赋值给类型 U，则结果类型为 X
   *     否则，结果类型为 Y
   */

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  /*
    const t01: TypeName<string> = "FOO"; // TS2322: Type '"FOO"' is not assignable to type '"string"'.
    const t02: TypeName<"FOO"> = "FOO"; // TS2322: Type '"FOO"' is not assignable to type '"string"'.
    const t03: TypeName<boolean> = "FOO"; // TS2322: Type '"FOO"' is not assignable to type '"boolean"'.
    const t04: TypeName<() => {}> = "FOO"; // TS2322: Type '"FOO"' is not assignable to type '"function"'.
  */
}

export {};
