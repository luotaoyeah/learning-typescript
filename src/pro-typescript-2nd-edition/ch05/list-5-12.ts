/**
 * Listing 5-12. Using apply to convert array to arguments
 */

console.log("----------");

const array = [1, 2, 3, 4, 5];

console.log(Math.max.apply(null, array));
console.log(Math.max(...array));

console.log("----------");
export {};
