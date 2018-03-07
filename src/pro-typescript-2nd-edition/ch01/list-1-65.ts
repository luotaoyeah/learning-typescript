/**
 * Listing 1-65. Currying with function overloads
 */

function multiply(a: number): (b: number) => number;
function multiply(a: number, b: number): number;
function multiply(a: number, b?: number): any {
  if (b === undefined) {
    return (b: number) => a * b;
  }
  return a * b;
}

/* 30 */
console.log(multiply(5, 6)); // tslint:disable-line

/* 30 */
console.log(multiply(5)(6)); // tslint:disable-line

export {};