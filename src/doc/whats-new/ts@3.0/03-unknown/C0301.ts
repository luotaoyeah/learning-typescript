/**
 * New unknown top type
 */

/*
 * unknown 跟 any 类似，但是又有区别：
 *     1. unknown 只能赋值给 unknown 和 any 类型
 *     2. 任何类型都可以赋值给 unknown 类型
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * unknown 只能赋值给 unknown 和 any 类型
   */

  let y: unknown;
  let z: any;

  let x: unknown = 3;
  /*
   * unknown 可以赋值给 unknown 类型
   */
  y = x;
  /*
   * unknown 可以赋值给 any 类型
   */
  z = x;

  // @ts-ignore
  let a: number = x; // TS2322: Type 'unknown' is not assignable to type 'number'.
  // @ts-ignore
  let b: object = x; // TS2322: Type 'unknown' is not assignable to type 'object'.
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 任何类型都可以赋值给 unknown 类型
   */
  let a: unknown = null;
  let b: unknown = undefined;
  let c: unknown = 9;
}

export {};
