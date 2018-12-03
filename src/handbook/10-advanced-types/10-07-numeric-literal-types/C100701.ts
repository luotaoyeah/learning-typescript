/*
 * Advanced Types
 *     Numeric Literal Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * numeric literal type 跟 string literal type 类似
   */

  type T = "foo" | 9;

  function getSome(t: T) {
    if (t === "foo") {
      console.log(t.toUpperCase());
    } else {
      console.log(t.toFixed(2));
    }
  }

  getSome("foo"); // FOO
  getSome(9); // 9.00
}
