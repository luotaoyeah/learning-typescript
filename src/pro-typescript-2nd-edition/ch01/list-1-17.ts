/**
 * Listing 1-17. Number literal and hybrid literal type
 */

type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;

let num: Fibonacci = 1;
num = 3;
num = 8;

/*
/!* TS2322: Type '7' is not assignable to type 'Fibonacci'. *!/
num = 7;
*/

type HybridLiteralType = 'tom' | 18 | false;

let foo: HybridLiteralType = 'tom';
foo = 18;
foo = false;

/*
/!*TS2322: Type 'true' is not assignable to type 'HybridLiteralType'. *!/
foo = true;
*/

export {};