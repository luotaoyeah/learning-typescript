(function() {
  /*
   * 在不同的 block scope 中可以声明同名的变量，
   * 此时，在内部的作用域内，内部的变量会隐藏外部的变量，称之为 shadowing；
   * 通常应该避免使用 shadowing 这个特性；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(condition: boolean, x: number): number | string {
    if (condition) {
      let x: string = "foo";
      return x;
    }

    return x;
  }

  /* 9 */
  console.log(fn01(false, 9));
  /* foo */
  console.log(fn01(true, 9));
})();
