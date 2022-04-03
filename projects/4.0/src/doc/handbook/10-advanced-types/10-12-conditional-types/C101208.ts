/*
 * Advanced Types
 *     Conditional Types
 *         Distributive conditional types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟 union type 和 intersection type 一样，
   * conditional type 不能引用自己
   */

  // @ts-ignore
  type Box<T> = T extends Array<any> ? Box<T[number]> : string; // TS2456: Type alias 'Box' circularly references itself.
}

export {};
