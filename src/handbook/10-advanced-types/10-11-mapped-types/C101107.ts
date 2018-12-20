/*
 * Advanced Types
 *     Mapped types
 *         Readonly<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Readonly<T>
   * 给所有属性加上 readonly 修饰符
   */

  interface Person {
    name: string;
  }

  const person01: Person = { name: "FOO" };
  person01.name = "BAR";

  type ReadonlyPerson = Readonly<Person>;
  const person02: ReadonlyPerson = { name: "FOO" };
  /*
    person02.name = "BAR"; // TS2540: Cannot assign to 'name' because it is a read-only property.
  */
}

export {};
