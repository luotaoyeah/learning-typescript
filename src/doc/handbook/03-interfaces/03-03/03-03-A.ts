/*
 * Readonly Properties
 */

/*
 * 在属性名前面加上 readonly 修饰符，
 * 表示该属性是只读的，只能在创建的时候进行初始化；
 */
console.log("\n-------------------------------------------------- 01");

interface Point {
  readonly x: number;
  readonly y: number;
}

/*
 * 可以使用 object literal 进行初始化，
 * 初始化之后，属性不能再被重新赋值；
 */
const point01: Point = { x: 0, y: 0 };
/*
  // TS2540: Cannot assign to 'x' because it is a constant or a read-only property.
  point01.x = 9;
*/

export {};
