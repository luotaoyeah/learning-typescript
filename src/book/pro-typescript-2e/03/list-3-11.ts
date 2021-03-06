/**
 * Listing 3-11. Checking a parameter
 */

console.log("----------");

enum Size {
  L,
  XL
}

function f(x: number) {
  console.log(x);
}

f(1);
f(Size.XL);

/*
/!* TS2345: Argument of type 'null' is not assignable to parameter of type 'number'. *!/
f(null);
*/

console.log("----------");
export {};
