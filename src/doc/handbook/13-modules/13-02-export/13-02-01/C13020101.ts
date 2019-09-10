/*
 * Modules
 *     Export
 *         Exporting a declaration
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 所有声明都可以通过 export 进行输出，如：
 *     变量（variable）
 *     函数（function）
 *     类（class）
 *     接口（interface）
 *     类型别名（type alias）
 */

export const name: string = "FOO";

export function fn() {
  console.log("FN");
}

export interface IPerson {}

export class Person {
  name: string = "FOO";
}

export type T = string;
