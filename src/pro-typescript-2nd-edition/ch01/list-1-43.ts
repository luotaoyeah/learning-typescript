/**
 * Listing 1-43. Skipping items
 */

const array: number[] = [1, 2, 3, 4, 5];
const [first, second, , , fifth] = array;

/* 1 */
console.log(first); // tslint:disable-line

/* 2 */
console.log(second); // tslint:disable-line

/* 5 */
console.log(fifth); // tslint:disable-line

export {};
