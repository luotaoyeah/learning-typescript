/**
 * Listing 1-55. Optional paramters
 */

function f(x: number, y: number, z?: number): string {
  if (z === undefined) {
    return `${x + y}`;
  } else {
    return `${x + y + z}`;
  }
}

/* '3' */
console.log(f(1, 2)); // eslint-disable-line
export {};