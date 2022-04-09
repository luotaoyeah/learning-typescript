/*
 * Type System Behavior
 *     Why are functions with fewer parameters assignable to functions that take more parameters?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 反过来，参数多的函数不能赋值给参数少的函数
 */

// TS2322: Type '(x: number, y: number) => void' is not assignable to type '(x: number) => void'.
// @ts-ignore
const fn: (x: number) => void = (x: number, y: number) => {};

export {};
