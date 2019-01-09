/*
 * Advanced Types
 *     Mapped types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 实例：
   * 给定任意类型 T，将它的所有属性变成 readonly 属性
   */

  type Readonly<T> = { readonly [K in keyof T]: T[K] };

  interface Person {
    name: string;
    age: number;
  }

  const person01: Person = { name: "FOO", age: 9 };
  person01.name = "BAR";
  person01.age = 99;

  type ReadonlyPerson = Readonly<Person>;
  const person02: ReadonlyPerson = { name: "FOO", age: 9 };
  /*
    person02.name = "BAR"; // TS2540: Cannot assign to 'name' because it is a read-only property.
    person02.age = 99; // TS2540: Cannot assign to 'age' because it is a read-only property.
  */
}

export {};
