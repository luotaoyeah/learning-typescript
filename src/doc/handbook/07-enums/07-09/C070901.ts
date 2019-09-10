/*
 * Enums
 *     ambient enums
 */

console.log("\n-------------------------------------------------- 01");

/*
 * ambient enum 就是对已经存在的 enum 进行类型声明；
 * 在 ambient enum 中，如果某个 member 没有初始值，则认为它是 computed ；
 */

declare enum E01 {
  A = 1,
  B,
  C = 2
}

declare const enum E02 {
  D,
  E
}
