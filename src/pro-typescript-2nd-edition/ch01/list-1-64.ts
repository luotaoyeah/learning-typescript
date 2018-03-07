/**
 * Listing 1-64. Currying with arrow functions
 */

/* currying */
const multiply = (a: number) => (b: number) => a * b;

const start = multiply(10);

const ten = start(1);
const hundred = start(ten);
const thousand = start(hundred);

/* 10 100 1000 */
console.log(ten, hundred, thousand); // tslint:disable-line

/* 100 */
console.log(multiply(10)(10)); // tslint:disable-line

export {};
