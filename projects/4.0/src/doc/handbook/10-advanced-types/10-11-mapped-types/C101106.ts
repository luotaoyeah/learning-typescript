/*
 * Advanced Types
 *     Mapped types
 *         Required<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Required<T>
   * Partial<T> 的反操作，将所有属性变成必选的
   */

  interface Person {
    name?: string;
  }

  const person01: Person = { name: "FOO" };
  person01.name = undefined;

  type RequiredPerson = Required<Person>;
  const person02: RequiredPerson = { name: "FOO" };
  /*
    person02.name = undefined; // TS2322: Type 'undefined' is not assignable to type 'string'.
  */
}

export {};
