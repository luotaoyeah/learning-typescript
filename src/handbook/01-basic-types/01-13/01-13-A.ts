/*
 * Type Assertions
 */

/*
 * 有时候，programmer 比 compiler 更加清楚某个变量的类型；
 * 这时候，可以使用 type assertion 来改变 compiler 的类型检查；
 * type assertion 类似其它语言的'强制类型转换'，但是它只会影响编译时的类型检查，不会影响运行时；
 */

/*
 * type assertion 有两种写法：<> 和 as
 */
console.log("\n-------------------------------------------------- 01");

let str: any = "this is a string";
/* 16 */
console.log((<string>str).length);
/* 16 */
console.log((str as string).length);

export {};
