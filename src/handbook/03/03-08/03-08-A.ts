/*
 * Extending Interface
 */

/*
 * interface 之间可以像 class 之间一样，使用 extends 实现扩展；
 */
console.log("\n-------------------------------------------------- 01");

interface IShape {
  color: string;
}

interface ISquare extends IShape {
  sideLength: number;
}

const square: ISquare = {} as ISquare;
square.color = "red";
square.sideLength = 99;

console.log(square);

export {};
