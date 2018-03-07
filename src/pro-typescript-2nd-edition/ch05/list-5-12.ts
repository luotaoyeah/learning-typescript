/**
 * Listing 5-12. Using apply to convert array to arguments
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

const array = [1, 2, 3, 4, 5];

console.log(Math.max.apply(null, array)); // tslint:disable-line
console.log(Math.max(...array)); // tslint:disable-line

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
