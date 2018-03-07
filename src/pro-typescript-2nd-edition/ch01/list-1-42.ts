/**
 * Listing 1-42. Array destructuring with a rest parameter
 */

const array: number[] = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = array;

/* 1 */
console.log(first); // tslint:disable-line

/* 2 */
console.log(second); // tslint:disable-line

/* [3, 4, 5] */
console.log(remaining); // tslint:disable-line

export {};