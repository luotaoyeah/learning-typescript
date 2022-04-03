/*
 * Advanced Types
 *     Index types
 *         keyof T
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * keyof 表示 index type query operator
   * 即对于某个类型 T，
   * keyof T 表示 T 的所有属性的名称组成的联合类型
   */

  interface Person {
    name: string;
    age: number;
  }

  /*
   * 下面两个类型是等价的
   */
  type type01 = keyof Person;
  type type02 = "name" | "age";

  let p: type01;
  p = "name";
  p = "age";

  /*
    p = "foo"; // TS2322: Type '"foo"' is not assignable to type '"name" | "age"'.
  */
}

export {};
