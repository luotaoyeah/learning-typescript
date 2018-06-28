(function() {
  /*
   * 可以使用 ... 将剩余的所有属性解构到一个 objcet 中；
   */
  console.log("\n-------------------------------------------------- 01");

  const { x, ...rest } = { x: 1, y: 2, z: 3 };
  /* { y: 2, z: 3 } */
  console.log(rest);
})();
