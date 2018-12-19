/*
 * Advanced Types
 *     Mapped types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 实例：
   * 给定任意类型 T，将它的所有属性变成 optional 属性
   */

  type Partial<T> = { [K in keyof T]?: T[K] };

  interface Person {
    name: string;
    age: number;
  }

  const person01: Person = { name: "FOO", age: 9 };
  /*
    person01.name = undefined; // TS2322: Type 'undefined' is not assignable to type 'string'.
    person01.age = undefined; // TS2322: Type 'undefined' is not assignable to type 'number'.
  */

  type PartialPerson = Partial<Person>;
  const person02: PartialPerson = { name: "FOO", age: 9 };
  person02.name = undefined;
  person02.age = undefined;
}

export {};
