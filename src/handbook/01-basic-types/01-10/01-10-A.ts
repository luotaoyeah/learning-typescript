/*
 * Null and Undefined
 */

/*
 * 当 --strictNullChecks: true 时，
 * null 只能赋值给 null 类型；
 * undefined 可以赋值给 undefined 类型和 void 类型；
 */
console.log("\n-------------------------------------------------- 01");

const foo01: null = null;
const bar01: undefined = undefined;
const baz01: void = undefined;

/*
 * 当 --strictNullChecks: false 时，
 * null 类型和 undefined 类型是任意类型的子类型，可以赋值给任意类型；
 */
console.log("\n-------------------------------------------------- 02");

const foo02: null = undefined;
const bar02: undefined = null;

let foo03: number = null;
foo03 = undefined;

export {};
