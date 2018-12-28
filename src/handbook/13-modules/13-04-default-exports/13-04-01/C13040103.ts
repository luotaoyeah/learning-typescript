/*
 * Modules
 *     Default exports
 *        default export class, interface, function
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 当使用 named export 时，下面的声明语句都可以直接输出：
 *     函数，接口，类，类型别名，变量
 * 当使用 default export 时，只有下面的声明语句可以直接输出：
 *     函数，接口，类
 */
export const x01: string = "X";
export function x02() {
  console.log("Y");
}
export interface I {}
export class A implements I {}
export type T = I;

/*
 * 下面三种默认输出都是可以的：
 */

// export default function fn01() {}
// export default class B{}
// export default interface C {}
