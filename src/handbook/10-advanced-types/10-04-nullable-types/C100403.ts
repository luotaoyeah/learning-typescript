/*
 * Advanced Types
 *     Nullable types
 *         Type guards and type assertions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 有时候，在 runtime 时期，某个对象的类型可以确定不为 null
   * 但是编译器不能正确识别这种情况，
   * 此时，可以使用 obj! 的形式显式标注，告诉编译器该对象不会为空
   */

  function outer(name?: string) {
    name = name || "foo";

    function inner() {
      /*
       * 在 nest function 中，编译器不知道该 function 什么时候调用，
       * 因此不能正确识别出 name 不会为 null
       */
      // @ts-ignore
      return name.toUpperCase();
    }

    return inner();
  }

  console.log(outer());
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当 nest function 是一个 IIFE 时，
   * 编译器可以正确识别
   */

  function outer(name?: string) {
    name = name || "foo";

    (function inner() {
      /*
       * 在 IIFE 中，编译器正确识别出 name 不会为 null
       */
      return name.toUpperCase();
    })();
  }

  console.log(outer());
}
