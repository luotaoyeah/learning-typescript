/*
 * Interfaces
 *     Interfaces Extending Classes
 */

/*
 * interface 不仅可以 extends 其他的 interface，
 * 还可以 extends 其他的 class；
 * 此时，interface 继承了该 class 所有的属性，
 * 但是没有继承这些属性的实现；
 */
console.log("\n-------------------------------------------------- 01");

class Point {
  x: string;
  y?: string;
}

interface IPoint extends Point {
  z: string;
}

/*
 * 继承的 y 属性依然是一个 optional 属性；
 */
const point: IPoint = { x: "x", z: "z" };
console.log(point);

export {};
