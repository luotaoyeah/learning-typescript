/*
 * enum 成员的值默认从 0 开始；
 */
console.log("\n-------------------------------------------------- 01");

enum FooEnum {
  A,
  B
}
/* 0 */
console.log(FooEnum.A);
/* 1 */
console.log(FooEnum.B);

/*
 * 可以手动设置某个成员的值，其后面成员的值会依次递增；
 */
console.log("\n-------------------------------------------------- 02");

enum BarEnum {
  A,
  B = 2,
  C
}
/* 0 */
console.log(BarEnum.A);
/* 2 */
console.log(BarEnum.B);
/* 3 */
console.log(BarEnum.C);

/*
 * 可以手动设置所有成员的值；
 */
console.log("\n-------------------------------------------------- 03");

enum BazEnum {
  A = 2,
  B = 4,
  C = 6
}
/* 2 */
console.log(BazEnum.A);
/* 4 */
console.log(BazEnum.B);
/* 6 */
console.log(BazEnum.C);

export {};
