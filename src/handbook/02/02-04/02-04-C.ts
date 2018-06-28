(function() {
  /*
   * 可以使用 ... 将剩余的所有元素解构到一个 array 中；
   */
  console.log("\n-------------------------------------------------- 01");

  const [first, ...rest] = [1, 2, 3, 4];
  /* [ 2, 3, 4 ] */
  console.log(rest);
})();

(function() {
  /*
   * 对于不需要解构的元素，可以留空；
   */
  console.log("\n-------------------------------------------------- 02");

  const [, second, , fourth] = [1, 2, 3, 4];
  /* 2 4 */
  console.log(second, fourth);
})();
