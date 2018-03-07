/**
 * Listing 1-58. Overloads
 */

function f(a: string, b: string): string;
function f(a: string, b: number): string;
function f(a: number, b: string): string;
function f(a: number, b: number): string;
function f(x: any, y: any): string {
  const total = parseInt(x, 10) + parseInt(y, 10);
  return `total:${total}`;
}

console.log(f("1", "2")); // tslint:disable-line
console.log(f(3, 4)); // tslint:disable-line
console.log(f(5, "6")); // tslint:disable-line

export {};
