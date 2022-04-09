/*
 * Namespaces
 *     Aliases
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以使用 import X = namespace01.namespace01.X 的形式，
 * 给命名空间中的数据起一个别名，即给嵌套太深的数据起一个较短的别名，
 * 增强代码的可读性
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace N01 {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace N02 {
    // eslint-disable-next-line no-shadow
    export function fn01() {
      console.log("X");
    }

    export type T01 = "T01";

    export interface I {
      name: string;
    }
  }
}

import fn01 = N01.N02.fn01;
fn01(); // X
N01.N02.fn01(); // X

console.log("\n-------------------------------------------------- 02");
/*
 * 这儿的数据不仅可以是一个 value
 * 还可以是一个 type
 * 还可以是一个 interface
 */
import T01 = N01.N02.T01;
const t01: T01 = "T01";

import I = N01.N02.I;
const i: I = { name: "FOO" };

export {};
