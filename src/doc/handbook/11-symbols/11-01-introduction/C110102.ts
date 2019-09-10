/*
 * Symbols
 *     Introduction
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 任意两个 symbol 都不会相等
   */

  const symbol01 = Symbol("FOO");
  const symbol02 = Symbol("FOO");

  // @ts-ignore
  // eslint-disable-next-line eqeqeq
  console.log(symbol01 == symbol02); // TS2367: This condition will always return 'false' since the types 'unique symbol' and 'unique symbol' have no overlap.
  // @ts-ignore
  console.log(symbol01 === symbol02); // TS2367: This condition will always return 'false' since the types 'unique symbol' and 'unique symbol' have no overlap.
}

export {};
