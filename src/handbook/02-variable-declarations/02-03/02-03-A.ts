/*
 * const declarations
 */

(function() {
  /*
   * const 类似 let，区别在于：const 变量在声明之后不能重新赋值；
   */
  console.log("\n-------------------------------------------------- 01");

  let x: number = 0;
  x = 9;

  const y: number = 0;
  /*
    // TS2540: Cannot assign to 'y' because it is a constant or a read-only property.
    y = 9;
  */
})();

(function() {
  /*
   * const 变量在声明的时候就必须初始化；
   */
  console.log("\n-------------------------------------------------- 02");

  let x: number;
  x = 9;

  /*
    // TS1155: 'const' declarations must be initialized.
    const y: number;
  */
})();
