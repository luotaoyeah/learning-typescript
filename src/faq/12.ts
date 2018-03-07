/**
 * Why can't I use x in the destructuring function f({ x: number }) {  }?
 */

/*
function f({ x: number }) {
  console.log(x); // tslint:disable-line
}
*/

function f({ x }: { x: number }) {
  console.log(x); // tslint:disable-line
}

function f02({ x: x }: { x: number }) {
  console.log(x); // tslint:disable-line
}

export {};
