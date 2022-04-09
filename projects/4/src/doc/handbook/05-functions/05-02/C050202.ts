/*
 * Functions
 *     Function Types
 *         Writing the function type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数的类型标注包括两部分：
   *     参数的类型，
   *     返回值的类型；
   */

  const add: (x: number, y: number) => number = function(x: number, y: number) {
    return x + y;
  };
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 函数的类型标注中，返回值的类型不能省略，
   * 如果函数没有返回值，则返回值标注为 void；
   */

  const fn01: (x: number, y: number) => void = function(x: number, y: number) {
    console.log(x + y);
  };
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 函数的类型标注中，参数的名称可以为任意名称，不需要跟函数的形参名称一致；
   */

  const fn01: (a: number, b: number) => void = function(x: number, y: number) {
    console.log(x + y);
  };
}

export {};
