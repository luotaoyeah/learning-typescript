/**
 * Listing 1-26. Forced type assertions
 */

const name: string = "tom";

/*
/!* TS2352: Type 'string' cannot be converted to type 'number'. *!/
const age: number = name as number;
*/

/* force type assertion */
const age: number = (name as any) as number;

/* OR */
const age02: number = <number>(<any>name);

/* age's value now is 'tom' */
console.log("age: ", age);

export {};
