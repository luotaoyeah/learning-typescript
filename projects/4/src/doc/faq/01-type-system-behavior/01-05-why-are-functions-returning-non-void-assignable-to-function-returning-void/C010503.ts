/*
 * Type System Behavior
 *     Why are functions returning non-void assignable to function returning void?
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 相反的，返回类型为 void 的函数不能赋值给返回类型  non-void 的函数
 */

// TS2322: Type '() => void' is not assignable to type '() => number'.
//   Type 'void' is not assignable to type 'number'.
// @ts-ignore
const fn01: () => number = function(): void {};

export {};
