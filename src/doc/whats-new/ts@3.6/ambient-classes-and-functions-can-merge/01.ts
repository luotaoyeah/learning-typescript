/* eslint-disable no-redeclare */
/*
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#ambient-classes-and-functions-can-merge
 */

/*
 * 在 ambient 环境可以合并 class 和 function,
 * 如下表示, Point2D 既可以当成一个 constructor 使用, 也可以当成一个普通的 function 使用
 */

declare function Point2D(x: number, y: number): Point2D;

declare class Point2D {
  x: number;
  y: number;

  constructor(x: number, y: number);
}

console.log(Point2D(9, 9));
console.log(new Point2D(9, 9));
