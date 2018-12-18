/*
 * Advanced Types
 *     Index types
 */

console.log("\n-------------------------------------------------- 01");
{
  function getProperty<T, K extends keyof T>(t: T, k: K): T[K] {
    return t[k];
  }

  interface Person {
    name: string;
    age: number;
  }

  const person: Person = { name: "FOO", age: 99 };

  console.log(typeof getProperty(person, "name")); // string
  console.log(typeof getProperty(person, "age")); // number
  /*
    getProperty(person, "foo"); //  TS2345: Argument of type '"foo"' is not assignable to parameter of type '"name" | "age"'.
  */
}

export {};
