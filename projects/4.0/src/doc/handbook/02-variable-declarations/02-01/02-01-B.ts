/* eslint-disable no-var,no-redeclare */
/*
 * Scoping rules
 */

(function() {
  /*
   * var 会进行变量提升（hoist）；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(init: boolean = false) {
    if (init) {
      var x = 9;
    }

    // @ts-ignore
    return x;
  }

  /* undefined */
  console.log(fn01());
  /* 9 */
  console.log(fn01(true));

  /*
   * 由于存在变量提升，fn01() 和 fn02() 是等价的；
   */
  function fn02(init: boolean = false) {
    let x;
    if (init) {
      x = 9;
    }

    return x;
  }

  /* undefined */
  console.log(fn02());
  /* 9 */
  console.log(fn02(true));
})();

(function() {
  /*
   * 使用 var 重复声明同一个变量时，
   * 后面的声明实际上只是在给已经存在的变量赋值，而不会声明新的变量；
   */
  console.log("\n-------------------------------------------------- 02");

  function fn01(init: boolean = false) {
    var x = "foo";
    if (init) {
      var x = "bar";
    }

    console.log(x);
  }

  /* foo */
  fn01();
  /* bar */
  fn01(true);
})();
