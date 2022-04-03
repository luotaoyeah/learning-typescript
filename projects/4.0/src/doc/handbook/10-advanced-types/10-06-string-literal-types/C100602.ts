/*
 * Advanced Types
 *     String Literal Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以使用 string literal type 来区分 method overloads
   */

  interface Person {}

  interface Boy extends Person {
    name: string;
  }

  interface Girl extends Person {
    age: number;
  }

  function getPerson(type: "boy"): Boy;
  function getPerson(type: "girl"): Girl;
  function getPerson(type: string): Person {
    if (type === "boy") {
      return { name: "foo" };
    } else {
      return { age: 18 };
    }
  }

  console.log(getPerson("boy")); // { name: 'foo' }
  console.log(getPerson("girl")); // { age: 18 }
}
