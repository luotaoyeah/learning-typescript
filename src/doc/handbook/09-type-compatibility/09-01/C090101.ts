/*
 * Type Compatibility
 *     Introduction
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * TS 中的 type compatibility 是基于 structural type（duck type），
   * 而不是 nominal type；
   */

  interface Named {
    name: string;
  }

  class Person {
    name: string;
  }

  let p: Named = new Person();
  p.name = "foo";
  console.log(p); // Person { name: 'foo' }
}
