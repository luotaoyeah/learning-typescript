/*
 * Advanced Types
 *     Index types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * keyof T 和 T[K] 一起使用
   */

  function pluck<T, K extends keyof T>(t: T, keys: Array<K>): Array<T[K]> {
    return keys.map(k => t[k]);
  }

  interface Person {
    name: string;
    age: number;
  }

  const person: Person = { name: "FOO", age: 99 };

  const names: Array<string> = pluck(person, ["name"]);
  console.log(names); // [ 'FOO' ]

  const values: Array<string | number> = pluck(person, ["name", "age"]);
  console.log(values); // [ 'FOO', 99 ]
}

export {};
