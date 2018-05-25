/**
 * Listing 1-16. String literal type
 */

type Letter = "a" | "b" | "c";

let letter1: Letter = "a";

/*
/!* TS2322: Type '"d"' is not assignable to type 'Letter'. *!/
letter1 = 'd';
*/

export {};
