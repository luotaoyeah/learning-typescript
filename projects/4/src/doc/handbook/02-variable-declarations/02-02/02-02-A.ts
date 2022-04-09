/*
 * let declarations
 */

(function() {
  /*
   * let 和 var 的用法是一样的，但是语义不同；
   *     var 声明的变量属于 global scope 或者 function scope，
   *     let 声明的变量属于 block scope（lexical scope）；
   */
  console.log("\n-------------------------------------------------- 01");

  (function(init: boolean = false): number {
    /* a 的作用域为：当前 function */
    const a = 9;

    if (init) {
      /* b 的作用域为：当前 if 代码块 */
      const b = 9;
      return a + b;
    }

    /*
        // TS2304: Cannot find name 'b'.
        return b;
    */

    return a;
  })();
})();

(function() {
  /*
   * catch 语句的参数的作用域为：catch 代码块；
   */
  console.log("\n-------------------------------------------------- 02");

  try {
    throw new Error("error");
  } catch (err: any) {
    console.log(err.message);
  }

  /*
    // TS2304: Cannot find name 'err'.
    console.log(err);
  */
})();
