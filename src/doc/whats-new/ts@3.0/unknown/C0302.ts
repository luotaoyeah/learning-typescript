/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     Intersection Type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * unknown 类型在 intersection type 中没有作用, 即:
   * 当 intersection type 中包含 unknown 类型时,
   * 等价于该 intersection type 中没有包含 unknown 类型
   */

  // tslint:disable-next-line:prefer-const
  let x: unknown;

  // @ts-ignore
  const a: unknown & null = x; // TS2322: Type 'unknown' is not assignable to type 'null'.
}

export {};
