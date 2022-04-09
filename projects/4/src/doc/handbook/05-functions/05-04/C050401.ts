/*
 * Functions
 *     Rest Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 JS 中，当函数的参数个数不确定时，可以在函数体内通过 arguments 变量获取所有参数；
   * 在 TS 中，使用 rest parameter 实现类似的功能；
   * rest parameter 可以看做一组可选参数组成的数组，其中可选参数的个数可以为任意个；
   * rest parameter 必须是最后一个参数，且只能有一个 rest parameter；
   */

  const fn01: (
    a: number,
    adult?: boolean,
    ...n: Array<string>
  ) => void = function(age: number, adult?: boolean, ...names: Array<string>) {
    console.log(names);
  };

  fn01(18); // []
  fn01(18, true, "a", "b", "c"); // [ 'a', 'b', 'c' ]
}

export {};
