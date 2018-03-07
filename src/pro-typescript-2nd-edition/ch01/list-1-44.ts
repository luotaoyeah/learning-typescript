/**
 * Listing 1-44. Variable swapping
 */

let a = 1;
let b = 2;

[a, b] = [b, a];

/* 2 */
console.log(a); // eslint-disable-line

/* 1 */
console.log(b); // eslint-disable-line

export {};
