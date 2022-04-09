/*
 * Type System Behavior
 *     Why don't I get type checking for (number) => string or (T) => T?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     fn01() 的类型定义为：(number) => string，及参数为 number 类型，
   *     为什么传递 boolean 类型的参数不会报错？
   */

  // @ts-ignore
  const fn01: (number) => string = n => n.toString();
  fn01(true);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     TS 中定义函数类型时，对于参数的类型，
   *     不能够只声明参数类型，而不声明参数名称，
   *     所有上面的 (number) => stirng 中的 number 表示的是参数名称，而不是参数类型
   *     它的类型是隐式的 any 类型，即相当于：(number: any) => string
   */
}

export {};
