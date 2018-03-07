/**
 * Listing 1-48. Undefined result
 */

const array = [1, 2, 3];

const [first, second, third, fourth] = array;

/* undefined */
console.log(fourth); // tslint:disable-line

export {};
