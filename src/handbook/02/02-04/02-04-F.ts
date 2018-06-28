(function() {
  /*
   * 对象解构的时候，可以给解构的属性变量取别名；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj = { x: 1, y: 2, z: 3 };

  let x;

  ({ x } = obj);
  /* 等价于 */
  ({ x: x } = obj);

  /* 1 */
  console.log(x);

  const { x: x01 } = obj;
  /* 等价于 */
  const x02 = obj.x;
  /* 1 1 */
  console.log(x01, x02);
})();

(function() {
  /*
   * 解构变量的类型声明，需要放在解构表达式的后面；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj = { x: "foo", y: 9, z: true };

  const { x, y, z }: { x: string; y: number; z: boolean } = obj;

  /* foo 9 true */
  console.log(x, y, z);
})();
