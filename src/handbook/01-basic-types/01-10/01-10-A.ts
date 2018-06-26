/*
 * Null and Undefined
 */

/*
 * 当 --strictNullChecks: true 时，
 * null 类型和 undefined 类型，分别只能被赋值为 null 和 undefined；
 */
console.log("\n-------------------------------------------------- 01");

const foo01: null = null;
const bar01: undefined = undefined;

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
