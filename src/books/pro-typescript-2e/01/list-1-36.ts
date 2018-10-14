/**
 * Listing 1-36. AND operator
 */

console && console.log("console available");

const a: string = "a";

/* b is only defined if a is defined */
const b = a && "b";

console.log(b);

export {};
