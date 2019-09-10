/*
 * Functions
 *     Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数可以分为'命名函数（函数定义语句，function statement）'和'匿名函数（函数表达式，function expression）'；
   */

  function namedFn() {
    console.log("foo");
  }

  namedFn();

  const anonymousFn = function() {
    console.log("bar");
  };

  anonymousFn();
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当函数引用了函数外部的变量时，称之为函数'捕获（capture）'了该变量；
   */

  const z = 3;

  function fn01(x: number, y: number) {
    // 在函数内部引用了函数外部的变量 z
    return x + y + z;
  }

  console.log(fn01(1, 2)); // 6
}

export {};
