/**
 * Listing 1-53. Spread operator in function call
 */

function f(x: number, y: number): number {
  return x + y;
}

const arr = [1, 2];

/*
/!* TS2556: Expected 2 arguments, but got a minimum of 0. *!/
/!* https://github.com/Microsoft/TypeScript/issues/4130 *!/
const sum = f(...arr);

console.log(sum); 
*/

export {};
