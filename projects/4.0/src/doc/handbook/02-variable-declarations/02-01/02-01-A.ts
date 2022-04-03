/*
 * var declarations
 */

/*
 * var 声明的变量为 global scope 或者 function scope；
 */

console.log("\n-------------------------------------------------- 01");

const v01 = "x";

(function() {
  /* x */
  console.log(v01);
})();

(function() {
  /* x */
  console.log(v01);
})();

console.log("\n-------------------------------------------------- 02");

function fn01() {
  const v02 = "y";

  return function() {
    /*
     * 在 inner function 中，会捕获 outer function 的变量；
     * 即使 outer function 执行完并返回，inner function 依然可以访问这些捕获的变量；
     */
    console.log(v02);
  };
}

/* y */
fn01()();

export {};
