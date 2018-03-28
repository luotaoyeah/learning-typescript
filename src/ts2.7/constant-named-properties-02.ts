/**
 * Const-named properties
 */

console.log("----------");

let Foo = "Foo";
const Bar = "Bar";

const x = {
  [Foo]: "foo",
  [Bar]: 18
};

/* 'string */
console.log(typeof x[Foo]);

/* 'number */
console.log(typeof x[Bar]);

console.log("----------");
export {};
