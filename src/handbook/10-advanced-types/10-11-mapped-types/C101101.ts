/*
 * Advanced Types
 *     Mapped types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 映射类型（mapped type）表示的是：
   * 对于某个类型 X
   * 对它的所有属性进行相同的处理（映射）之后，
   * 得到新的类型 Y
   */

  type X = "name" | "age";
  /*
   * 映射类型的语法，有些类似 index signature 的语法，
   * 同时它里面使用了 for/in 循环
   */
  type Y = { [K in X]: boolean };
  const y: Y = { name: true, age: false };
}

export {};
