/*
 * Declaration Merging
 *     Merging Namespaces
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 同名的 namespace 也可以进行合并
 * 因为 namespace 同时属于两种声明类型：namespace 和 value
 * 因此在合并的时候，需要分开考虑
 *
 * 从 namespace 的角度来说，两个 namespace 合并之后，它们中的 exported interface 也会进行合并
 * 从 value 的角度来说，两个 namespace 合并之后，它们中的成员会合并到同一个 namespace 之下
 */

namespace N01 {
  export interface I01 {
    x: number;
  }
  export function fn01() {
    console.log("FOO");
  }
}

namespace N01 {
  export interface I01 {
    y: number;
  }
  export function fn02() {
    console.log("BAR");
  }
}

N01.fn01(); // FOO
N01.fn02(); // BAR
const i: N01.I01 = { x: 9, y: 9 };

export {};
