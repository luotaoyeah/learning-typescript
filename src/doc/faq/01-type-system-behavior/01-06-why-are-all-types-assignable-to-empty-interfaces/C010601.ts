/*
 * Type System Behavior
 *     Why are all types assignable to empty interfaces?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 因为 TS 是 structural typing，
 * 因此通过 interface 来定义一个类型时，
 * 实际上是通过指定 interface 中有哪些成员的方式，来规定它的具体类型要求的，
 * 而 empty interface 没有任何成员，即它没有任何类型要求，
 * 因此，任何类型都可以赋值给 empty interface
 * 因为任何类型都满足它的类型条件（没有条件）
 */

interface empty {}

let x: empty;
x = "0";
x = 9;
x = {};
x = [];
x = () => {};

/*
 * 注意：
 *     如果开启了 --strictNullChecks
 *     则 null 和 undefined 不能赋值给空接口
 */

// @ts-ignore
x = null;
// @ts-ignore
x = undefined;

export {};
