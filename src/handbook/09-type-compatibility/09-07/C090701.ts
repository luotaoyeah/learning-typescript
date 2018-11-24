/*
 * Type Compatibility
 *     Subtype vs Assignment
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * TS 中有两种类型兼容（compatibility）：
   *     父子类型（subtype）
   *     赋值兼容（assignment）
   *
   * assignment 相比 subtype，增加了两个规则：
   *     1. any 类型可以跟任意类型相互赋值
   *     2. 默认的 enum 可以跟 number 类型相互赋值
   *
   * 在不同的地方，使用不同的类型兼容，
   * 但是通常说的 type compatibility 指的是 assignment
   */
}

export {};
