/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     Only Equality Operators Are Allowed With Unknown
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 unknown 类型, 只能使用 equality operators(==/!=/===/!==),
   * 其他 operators 会报错
   */

  const x: unknown = 0;

  console.log(x === 0);
  console.log(x !== 0);

  // @ts-ignore TS2571: Object is of type 'unknown'.
  console.log(x > 0);
  // @ts-ignore TS2571: Object is of type 'unknown'.
  console.log(x + 0);
}

export {};
