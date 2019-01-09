(function() {
  /*
   * 在变量声明之前，在 function 中捕获该变量；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(): string {
    return a;
  }

  /*
    // 在 a 定义之前调用；
    // 编译时，此处不会报错，运行时，此处会报错；
    // ReferenceError: a is not defined
    fn01();
  */

  let a: string = "foo";

  /* foo */
  console.log(fn01());
})();
