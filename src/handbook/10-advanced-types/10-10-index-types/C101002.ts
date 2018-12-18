/*
 * Advanced Types
 *     Index types
 *         T[K]
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * T[K] 称之为 indexed access operator
   * 即对于类型 T 和 K，
   * T[K] 表示对象 T 的 K 属性的类型，
   * 其中 K 是一个 string literal 类型
   */

  interface Person {
    name: string;
    age: number;
  }

  /*
   * T01 的实际类型为 Person 的 name 属性的类型，即 string
   */
  type T01 = Person["name"];
  const t01: T01 = "FOO";

  /*
   * T02 的实际类型为 Person 的 age 属性的类型，即 number
   */
  type T02 = Person["age"];
  const t02: T02 = 9;
}

export {};
