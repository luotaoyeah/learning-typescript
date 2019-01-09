(function() {
  /*
   * 在同一作用域内，'let 变量'和'函数参数'，'let 变量'和' var 变量'，不能同名；
   */
  console.log("\n-------------------------------------------------- 01");

  (function(init: boolean = false) {
    /*
        // TS2300: Duplicate identifier 'init'.
        let init: string = "foo";
    */
  })();

  (function() {
    let foo: string = "foo";

    /*
        // TS2451: Cannot redeclare block-scoped variable 'foo'.
        var foo: string = "foo";
    */
  })();
})();

(function() {
  /*
   * 在同一作用域内，'var 变量'和'函数参数'如果同名，则类型也必须相同；
   */
  console.log("\n-------------------------------------------------- 02");

  (function(init: boolean = false) {
    /*
        // TS2403: Subsequent variable declarations must have the same type.
        // Variable 'init' must be of type 'boolean', but here has type 'string'.
        var init: string = "foo";
    */

    var init: boolean = true;
  })();
})();
