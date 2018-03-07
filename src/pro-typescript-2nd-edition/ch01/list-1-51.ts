/**
 * Listing 1-51. Array spreading
 */

const arr01 = [1, 2, 3];

const arr02 = [4, 5, 6];

const arr03 = [...arr01, ...arr02];

/* [1, 2, 3, 4, 5, 6] */
console.log(arr03); // tslint:disable-line

export {};