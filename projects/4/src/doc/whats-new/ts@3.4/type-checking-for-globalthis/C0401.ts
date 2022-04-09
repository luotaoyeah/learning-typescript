/**
 * Type-Checking for globalThis
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ts@3.4 支持对 globalThis 进行类型检查
   */
  console.assert(typeof globalThis.setTimeout === "function");
}
