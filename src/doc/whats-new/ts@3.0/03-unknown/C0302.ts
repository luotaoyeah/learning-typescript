/**
 * New unknown top type
 *     intersection type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * unknown 类型在 intersection 中没有作用，即：
   * 当 intersection 中包含 unknown 类型时，
   * 等价于该 intersection tyoe 中没有包含 unknown 类型
   */

  let x: unknown;

  // @ts-ignore
  let a: unknown & null = x; // TS2322: Type 'unknown' is not assignable to type 'null'.
}

export {};
