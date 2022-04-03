/*
 * Declaration Merging
 *     Disallowed Merges
 */

console.log("\n-------------------------------------------------- 01");
/*
 * class 和 class 之间不能合并
 */

// @ts-ignore
class C {}
// @ts-ignore
// eslint-disable-next-line no-redeclare
class C {} // TS2300: Duplicate identifier 'C'.

export {};
