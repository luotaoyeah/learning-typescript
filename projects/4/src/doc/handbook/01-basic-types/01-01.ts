/*
 * TS 支持 JS 的所有类型之外，还支持：
 *     tuple，
 *     enum，
 *     null，
 *     undefined，
 *     void，
 *     any，
 *     never，
 */

console.log("\n-------------------------------------------------- 01");

enum FooEnum {
  A,
  B
}

/* { '0': 'A', '1': 'B', A: 0, B: 1 } */
console.log(FooEnum);

export {};
