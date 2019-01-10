/*
 * Type System Behavior
 *     Why are functions with fewer parameters assignable to functions that take more parameters?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 函数的参数可以少给，但是给了的参数，其类型必须匹配
 */

// TS2322: Type '(x: string) => void' is not assignable to type '(x: number, y: number) => void'.
//   Types of parameters 'x' and 'x' are incompatible.
//     Type 'number' is not assignable to type 'string'.
// @ts-ignore
const fn: (x: number, y: number) => void = (x: string) => {};

export {};
