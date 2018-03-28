/**
 * Why can't I use x in the destructuring function f({ x: number }) {  }?
 */

/*
function f({ x: number }) {
  console.log(x);
}
*/

function f({ x }: { x: number }) {
  console.log(x);
}

function f02({ x: x }: { x: number }) {
  console.log(x);
}

export {};
