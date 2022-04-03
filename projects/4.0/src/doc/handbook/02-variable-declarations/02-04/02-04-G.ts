/*
 * 解构变量可以设置默认值，当解构出的属性值为 undefined 时，会使用该默认值；
 */
(function() {
  console.log("\n-------------------------------------------------- 01");

  const { x, y = 9 } = { x: 1 };

  /* 9 */
  console.log(y);
})();

(function() {
  console.log("\n-------------------------------------------------- 02");

  function fn01(obj: { a: number; b?: number }) {
    const { a: x, b: y = 9 } = obj;
    console.log(x, y);
  }

  /* 1 9 */
  fn01({ a: 1 });
  /* 1 3 */
  fn01({ a: 1, b: 3 });
})();
