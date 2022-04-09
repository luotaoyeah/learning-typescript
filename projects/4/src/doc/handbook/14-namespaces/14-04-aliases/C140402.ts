/* eslint-disable @typescript-eslint/no-namespace */
/*
 * Namespaces
 *     Aliases
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 使用 import X = n01.n02.X 可以给任意类型的数据起别名
 * 而如果使用 var x = n01.n02.X　的形式，
 * 　　则需要针对不同类型的数据，使用不同的语法形式
 */

namespace N01 {
  export namespace N02 {
    export const x: string = "X";
    export type T = "T";
  }
}

import T01 = N01.N02.T;
const t01: T01 = "T";

import x01 = N01.N02.x;
console.log(x01); // X

type T02 = N01.N02.T;
const t02: T02 = "T";

const x02 = N01.N02.x;
console.log(x02); // X

export {};
