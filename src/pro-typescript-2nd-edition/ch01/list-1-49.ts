/**
 * Listing 1-49. Default values
 */

const array = [1, 2, 3];

const [first, second, third = -1, fourth = -2] = array;

/* 3 */
console.log(third);

/* -2 */
console.log(fourth);

export {};
