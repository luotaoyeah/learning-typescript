(function() {
  /*
   * 在相同的作用域内，var 可以重复声明同一个变量，实际上指向的是同一个变量；
   */
  console.log("\n-------------------------------------------------- 01");

  (function(init: boolean = false) {
    var x: any = "foo";
    var x: any = "bar";
    var x: any = 9;

    if (init) {
      var x: any = 99;
    }

    /* 99 */
    console.log(x);
  })(true);
})();

(function() {
  /*
   * 在相同的作用域内，let 不可以重复声明同一个变量；
   */
  console.log("\n-------------------------------------------------- 02");

  (function(init: boolean = false) {
    let x: any = "foo";

    /*
        // TS2451: Cannot redeclare block-scoped variable 'x'.
        let x: any = "boo";
    */
  })(true);
})();
