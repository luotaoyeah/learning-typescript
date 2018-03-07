/**
 * Listing 1-57. Rest Parameters
 */

function f(...args: number[]) {
  let sum = 0;
  args.forEach(x => sum += x);
  return sum;
}

/* 3 */
console.log(f(1, 2)); // tslint:disable-line

/* 6 */
console.log(f(1, 2, 3)); // tslint:disable-line

export {};