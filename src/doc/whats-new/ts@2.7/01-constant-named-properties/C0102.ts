/**
 * Constant-named properties
 */

console.log("\n-------------------------------------------------- 01");
{
  const K01 = "K01";
  const K02 = "K02";

  const obj = {
    [K01]: 9,
    [K02]: "x"
  };

  /*
   * a 和 b 的类型都可以正确推断出来
   */
  const a = obj[K01];
  const b = obj[K02];
}

export {};
