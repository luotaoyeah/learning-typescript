/**
 * New unknown top type
 *     union type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当 union type 中包含 unknown 类型时，
   * 该 union type 的类型就是 unknown 类型
   */

  /*
   * x 的类型就是 unknown 类型
   */
  let x: unknown | null | undefined = "";
}

export {};
