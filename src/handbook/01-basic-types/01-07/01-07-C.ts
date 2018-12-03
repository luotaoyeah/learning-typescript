/*
 * 除了可以通过 name 获取 value，还可以通过 value 获取 name；
 */
console.log("\n-------------------------------------------------- 01");

enum FooEnum {
  A,
  B
}
/* 1 */
console.log(FooEnum.B);
/* B */
console.log(FooEnum[1]);

export {};
