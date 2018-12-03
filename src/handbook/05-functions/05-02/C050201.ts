/*
 * Functions
 *     Function Types
 *         Typing the function
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数中的类型包括：
   *     参数的类型，
   *     返回值的类型；
   */

  function add(x: number, y: number): number {
    return x + y;
  }

  const subtract = function(x: number, y: number): number {
    return x - y;
  };
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 返回值的类型，可以根据返回的值进行推断，
   * 所以，有时候可以省略返回类型的标注；
   */

  function divide(x: number, y: number) {
    return x / y;
  }
}

export {};
