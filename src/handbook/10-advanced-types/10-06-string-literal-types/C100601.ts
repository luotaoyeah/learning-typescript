/*
 * Advanced Types
 *     String Literal Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用一个 string literal 作为类型，
   * 表示对象的值只能是这个 string literal
   */

  let str01: "foo" = "foo";
  console.log(str01); // foo
  /*
    str01 = "bar"; // TS2322: Type '"bar"' is not assignable to type '"foo"'.
  */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * string literal type 可以很好地跟 union type，type guard，type alias 一起使用，
   * 可以模拟 enum 的行为
   */
  type T = "foo" | "bar";

  function getSome(t: T) {
    if (t === "foo") {
      return "FOO";
    } else {
      return "BAR";
    }
  }

  console.log(getSome("bar")); // BAR
}
