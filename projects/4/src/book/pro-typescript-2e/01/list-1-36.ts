/**
 * Listing 1-36. AND operator
 */

// eslint-disable-next-line no-unused-expressions
console && console.log("console available");

const a: string = "a";

/* b is only defined if a is defined */
const b = a && "b";

console.log(b);

export {};
