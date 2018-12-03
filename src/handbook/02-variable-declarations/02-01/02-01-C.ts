/*
 * Variable capturing quirks
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  /*
   * setTimeout() 会在循环执行完之后再执行，此时 i = 10；
   * 由于 i 是使用 var 定义的，setTimeout 中的所有 function 访问的都是同一个 i（10）；
   */
  (function() {
    for (var i = 0; i < 10; i++) {
      setTimeout(function() {
        console.log(i);
      }, i * 1000);
    }
  })();

  /*
   * 解决方法01：使用 IIFE（Immediately Invoked Function Expression）；
   */
  (function() {
    for (var i = 0; i < 10; i++) {
      (function(i) {
        /*
         * 此处的 i 实际上为函数参数 i，只是恰好跟外面的 i 同名；
         */
        setTimeout(function() {
          console.log(i);
        }, 1000 * i);
      })(i);
    }
  })();

  /*
   * 解决方法02：使用 let 替换 var；
   * let 声明的变量为 block scope，每次循环都会捕获本次循环的 i 的值；
   */
  (function() {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        console.log(i);
      }, 1000 * i);
    }
  })();
})();
