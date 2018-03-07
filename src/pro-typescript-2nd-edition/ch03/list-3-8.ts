/**
 * Listing 3-8. Widened types
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

function f() {
  return null;
}

/* inferred type of x is any */
const x = f();

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};