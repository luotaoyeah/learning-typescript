/*
 * TS 支持 JS 的所有类型，外加一个 enum 类型；
 */

console.log("\n-------------------------------------------------- 01");

enum FooEnum {
  A,
  B
}

/* { '0': 'A', '1': 'B', A: 0, B: 1 } */
console.log(FooEnum);

export {};
