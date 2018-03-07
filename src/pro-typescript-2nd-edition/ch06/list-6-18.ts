/**
 * Listing 6-18. Session storage
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

const key = 'name';
console.log('name', sessionStorage.getItem(key)); // tslint:disable-line

sessionStorage.setItem(key, 'tom');

console.log('name', sessionStorage.getItem(key)); // tslint:disable-line

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};