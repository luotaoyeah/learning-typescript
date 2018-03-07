/**
 * Listing 1-62. Wrapping an object in parentheses
 */

const f = (x: string) => ({ name: x });

console.log(f('tom')); // tslint:disable-line

export {};