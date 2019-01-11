/*
 * Type System Behavior
 *     Why are all types assignable to empty interfaces?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 任何类型都可以赋值给空接口
 * 因为空接口的类型表示的是：我没有任何成员
 * 而任何类型都满足这个条件（即没有条件）
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
