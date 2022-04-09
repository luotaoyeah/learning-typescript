/**
 * Listing 1-43. Skipping items
 */

const array: Array<number> = [1, 2, 3, 4, 5];
const [first, second, , , fifth] = array;

/* 1 */
console.log(first);

/* 2 */
console.log(second);

/* 5 */
console.log(fifth);

export {};
