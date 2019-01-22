/**
 * New unknown top type
 *     keyof
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * unknown 的 keyof 结果为 never
   */

  /*
   * T 的实际类型为 never
   */
  type T = keyof unknown;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 作为对比，
   * any 的 keyof 结果为 string | number | symbol
   */

  type T = keyof any;
}

export {};
