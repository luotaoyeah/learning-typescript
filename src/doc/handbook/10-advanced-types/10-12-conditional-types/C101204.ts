/*
 * Advanced Types
 *     Conditional Types
 *         Distributive conditional types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果一个条件类型（T extends U ? X : Y）中的 T 是一个类型参数，
   * 则这个条件类型叫做"可分发的条件类型（distributive conditional type）"，
   * 此时，如果这个类型参数的实际类型是一个联合类型，
   * 则结果类型也会是一个联合类型（对类型参数进行分发）
   */

  /*
   * 下面的类型别名 TypeName 中使用了条件类型，
   * 该条件类型中的 T 是一个类型参数，因此它是一个可分发的条件类型
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
   * 类型 T01 的实际类型为："string" | "number"
   */
  type T01 = TypeName<string | number>;
  // @ts-ignore
  const t01: T01 = 0; // TS2322: Type '0' is not assignable to type '"string" | "number"'.
}

export {};
