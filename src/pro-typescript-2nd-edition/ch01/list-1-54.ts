/**
 * Listing 1-54. Function type annotations
 */

function f(x: number, y: number): string {
  return `${x + y}`;
}

/* '3' */
console.log(f(1, 2)); // eslint-disable-line
export {};