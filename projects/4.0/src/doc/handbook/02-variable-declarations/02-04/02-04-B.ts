(function() {
  /*
   * array destructuring 可以用在 function 的 parameters 处；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01([name, age]: [string, number]): void {
    console.log(name, age);
  }
  /* foo 18 */
  fn01(["foo", 18]);
})();
