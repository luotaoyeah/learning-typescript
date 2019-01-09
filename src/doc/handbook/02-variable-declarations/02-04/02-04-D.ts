/*
 * Object destructuring
 */

(function() {
  /*
   * object destructuring
   */
  console.log("\n-------------------------------------------------- 01");
  const person: any = { x: 1, y: 2, z: 3 };

  /* 解构的同时会声明变量 */
  const { x, y } = person;
  /* 1 2 */
  console.log(x, y);
})();

(function() {
  /*
   * 可以先声明变量，再用来解构；
   */
  console.log("\n-------------------------------------------------- 02");
  const person: any = { x: 1, y: 2, z: 3 };

  let x, y;

  /* 需要整个用小括号包裹起来，否则会将 { 解析为代码块的开始 */
  ({ x, y } = person);

  /* 1 2 */
  console.log(x, y);
})();
