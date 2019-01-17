/*
 * Modules
 *     What's the difference between enum and const enums?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     const enum 跟 enum 有什么区别？
   */

  enum E01 {
    A,
    B
  }

  console.log(E01.A);

  const enum E02 {
    A,
    B
  }

  console.log(E02.A);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     const enum 在编译为 JS 之后，不会创建 enum 对象，
   *     所有用到该 enum 的地方，都会被替换为对应的内联值，
   *     因此，无法反向访问 enum 成员
   *
   *     且 const enum 的成员只能是 constant 成员，不能是 computed 成员
   */
}

export {};
