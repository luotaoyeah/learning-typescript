/* eslint-disable prefer-const */
/*
 * Destructuring
 */

(function() {
  /*
   * array destructuring
   */
  console.log("\n-------------------------------------------------- 01");
  const array: Array<number> = [1, 2];

  /* 解构的同时会声明两个变量 */
  const [first01, second01]: Array<number> = array;
  /* 1 */
  console.log(first01);
  /* 2 */
  console.log(second01);

  /* 等价于 */
  const first02: number = array[0];
  const second02: number = array[1];
  /* 1 */
  console.log(first02);
  /* 2 */
  console.log(second02);
})();

(function() {
  /*
   * 可以先声明变量，在用来解构；
   * 此时必须使用 let 来声明，不能使用 const 来声明；
   */
  console.log("\n-------------------------------------------------- 02");

  const array: Array<number> = [1, 2];
  let first: number;
  let second: number;

  [first, second] = array;

  console.log(first);
  console.log(second);
})();
