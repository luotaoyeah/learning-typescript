/*
 * Type Inference
 *     Basics
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 TS 中有些地方，如果没有显式地标注类型，则会使用 type inference；
   */

  // 变量声明
  let x = 3;
  console.log(x.toFixed(1)); // 3.0

  // 有默认值的函数参数
  (function fn01(x = 3) {
    console.log(x.toFixed(2));
  })(); // 3.00

  // 函数的返回值
  console.log(
    (function fn02() {
      return 3;
    })().toFixed(3)
  ); // 3.000
}
