/**
 * New unknown top type
 *     initialization
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果是 unknown 类型的变量, 可以不需要初始化, 直接赋值给其他变量
   */

  let x: unknown;
  let y: any = x;

  /*
   * 当开启了 strictPropertyInitialization 时,
   * 如果 class 的 field 是 unknown 类型, 则不会报错
   */
  class A {
    // @ts-ignore
    x: number; // TS2564: Property 'x' has no initializer and is not definitely assigned in the constructor.
    y: unknown;
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果是其他类型的变量, 必须先进行初始化, 之后才能赋值给其他变量
   */

  let x: number;
  // @ts-ignore
  let y: any = x; // TS2454: Variable 'x' is used before being assigned.
}

export {};
