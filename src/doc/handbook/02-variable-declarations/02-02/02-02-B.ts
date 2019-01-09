/*
 * TDZ（Temporal Dead Zone）
 */

(function() {
  /*
   * 从一个变量所属的作用域开始，到该变量定义并赋值的地方为止，称之为 TDZ；
   * 在 TDZ 中访问该变量会报错（ReferenceError）；
   */
  console.log("\n-------------------------------------------------- 01");

  (function() {
    /* x 的 TDZ 开始 */
    let y = 9;
    console.log(y);

    /*
        // TS2448: Block-scoped variable 'x' used before its declaration.
        console.log(x);
    */
    let x = 9;
    /* x 的 TDZ 结束 */
  })();
})();

(function() {
  /*
   * let 的 TDZ 和 var 的 hoisted 的区别：
   *     在 var 的作用域内，var 赋值之前，访问 var 不会报错，值为 undefined；
   *     在 let 的作用域内，let 赋值之前，访问 let 会报错；
   * 即：let 也存在 hoisted，但是在其声明并赋值之前，都属于 TDZ，访问都会报错；
   */
  console.log("\n-------------------------------------------------- 02");

  let x = 9;
  {
    /*
        // 此处已经进入 x 的 TDZ，即此处的 x 为该代码块的 x，而不是外部的 x；
        // 但是由于此时 x 尚未声明并赋值，所以访问报错；
        // TS2448: Block-scoped variable 'x' used before its declaration.
        console.log(x);
    */
    let x = 99;
  }
})();
