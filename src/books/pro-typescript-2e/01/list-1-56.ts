/**
 * Listing 1-56. Default parameters
 */

function f(x: number, y: number, z: number = x * y): string {
  return `${x + y + z}`;
}

/* '5' */
console.log(f(1, 2)); // eslint-disable-line
export {};
