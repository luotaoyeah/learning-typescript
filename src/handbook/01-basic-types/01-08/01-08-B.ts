/*
 * any 类型可以用来将已有的 JS 代码逐步迁移到 TS；
 * any 类型和 Object 类型的区别：
 *     any 类型和 Object 类型都可以被赋值任意类型的值；
 *     Object 类型只能访问 Object.prototype 上面存在的属性和方法；
 */
console.log("\n-------------------------------------------------- 01");

const foo: any = 4;
/* 4.00 */
console.log(foo.toFixed(2));

const bar: Object = 4;
/* 4 */
console.log(bar.toString());
/*
  // TS2339: Property 'toFixed' does not exist on type 'Object'.
  console.log(bar.toFixed(2));
*/

export {};
