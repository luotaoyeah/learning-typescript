/**
 * Listing 1-20. Tuple types
 */

/* 元组 */
type PoemType = [number, string, boolean];

let poem: PoemType = [18, "tom", true];
console.log(poem); // tslint:disable-line

poem[2].valueOf();

/*
/!* TS2322: Type '[number, number, true]' is not assignable to type '[number, string, boolean]'. *!/
poem = [18, 18, true];
*/

export {};
