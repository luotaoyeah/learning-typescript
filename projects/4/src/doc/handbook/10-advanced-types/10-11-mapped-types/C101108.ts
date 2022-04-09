/*
 * Advanced Types
 *     Mapped types
 *         Pick<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Pick<T>
   * 选取指定的某一部分属性
   */

  interface Person {
    name: string;
    age: number;
    score: number;
    adult: boolean;
  }

  const person01: Person = {
    name: "FOO",
    age: 9,
    score: 99,
    adult: false
  };

  type YoungPerson = Pick<Person, "name" | "score">;
  const person02: YoungPerson = { name: "FOO", score: 99 };
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * K extends keyof T
   * 表示 K 只是 keyof T 的某一部分，
   * 即 K 只是 T 的某一部分属性组成的联合类型
   */
  type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
}

export {};
