/**
 * Listing 1-42. Array destructuring with a rest parameter
 */

const array: number[] = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = array;

/* 1 */
console.log(first);

/* 2 */
console.log(second);

/* [3, 4, 5] */
console.log(remaining);

export {};
