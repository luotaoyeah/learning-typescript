/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     Locals Of Type unknown Always Considered Initialized
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果是 unknown 类型的变量, 可以不需要初始化, 直接赋值给其他变量
   */

  let x: unknown;
  const y: any = x;

  /*
   * 当开启了 --strictPropertyInitialization 时,
   * 如果 class 的 field 是 unknown 类型, 即使它没有被初始化, 也不会报错,
   * 而其他类型的 field 就会报错
   */
  class A {
    public x: unknown;
    // @ts-ignore TS2564: Property 'x' has no initializer and is not definitely assigned in the constructor.
    public y: number;
  }
}

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果是其他类型的变量, 必须先进行初始化, 之后才能赋值给其他变量
   */

  let x: number;
  // @ts-ignore TS2454: Variable 'x' is used before being assigned.
  const y: any = x;
}

export {};
