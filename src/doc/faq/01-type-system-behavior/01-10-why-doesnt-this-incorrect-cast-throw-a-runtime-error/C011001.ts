/*
 * Type System Behavior
 *     Why doesn't this incorrect cast throw a runtime error?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     非法的类型转换为什么不会报错？
   */

  /*
   * 为什么 true 转换为 string 不会报错？
   */
  let a: any = true;
  let b: string = a as string;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     TS 中不存在类型转换（type conversion，type cast），
   *     TS 中的类型断言（type assertion）只是告诉编译器说：
   *         在编译期间，你就把它当成这种类型去对待
   */
}

export {};
