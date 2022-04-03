/*
 * spread 是 destructure 的相反操作；
 */

(function() {
  /*
   * array spreading
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2];
  const array02 = [3, 4];

  /* [ 0, 1, 2, 3, 4, 5 ] */
  console.log([0, ...array01, ...array02, 5]);
})();

(function() {
  /*
   * object spreading
   * 后面的属性会覆盖前面的同名属性；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = { x: 1, y: 2 };
  const obj02 = { y: 3, z: 3 };

  /* { x: 1, y: 3, z: 3 } */
  console.log({ ...obj01, ...obj02 });
})();
