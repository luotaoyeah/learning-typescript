/*
 * Advanced Types
 *     Conditional Types
 *         defer
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当条件类型中的条件语句（T extends U）无法确定结果时，条件类型会推迟（defer）得到结果类型，
   * 通常，当 T 或者 U 中包含其他类型参数时，结果类型可能会被推迟，
   * 当结果类型被推迟时，此时的结果类型为：两个成员类型组成的联合类型
   */
  function f<T extends true | false>(t: T): T extends true ? string : number {
    return t as any;
  }

  const t: boolean = Math.random() < 0.5;
  /*
   * 因为参数 t 在编译时无法确定类型（true | false），
   * 因此 f() 函数的返回类型（条件类型：T extends true ? string : number）无法确定结果类型，
   * 因此，结果类型为两个成员类型组成的联合类型（string | number）
   */
  /*
    let x: string = f(t); // TS2322: Type 'string | number' is not assignable to type 'string'.
  */
}

export {};
