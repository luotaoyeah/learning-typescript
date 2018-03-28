/**
 * Fixed Length Tuples
 */

console.log("----------");

let t01: [number, string] = [18, "tom"];

const t02: [number, string, number] = [20, "cat", 100];

/*
/!*
 * Error:(11, 1) TS2322: Type '[number, string, number]' is not assignable to type '[number, string]'.
 * Types of property 'length' are incompatible.
 * Type '3' is not assignable to type '2'.
 *!/
t01 = t02;
*/

console.log("----------");
export {};
