/**
 * Listing 1-6. Constants
 */

const name = "Foo";

/*
/!* TS2540: Cannot assign to 'name' because it is a constant or a read-only property. *!/
name = 'Bar';
*/

const numbers = [1, 2, 3];

/* Mutable - this changes the value of numbers without using an assignment */
numbers.push(4, 5, 6);

export {};
