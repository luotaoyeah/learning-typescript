/*
 * Number
 */

/*
 * number 类型的值支持：
 *     decimal（10进制）
 *     hexadecimal（16进制）
 *     binary（2进制）
 *     octal（8进制）
 */

console.log("\n-------------------------------------------------- 01");

const decimal: number = 99;
/* 99 */
console.log(decimal.toString(10));

const hexadecimal: number = 0xff;
/* 255 */
console.log(hexadecimal.toString(10));

const binary: number = 0b11;
/* 3 */
console.log(binary.toString(10));

const octal: number = 0o77;
/* 63 */
console.log(octal.toString(10));

export {};
