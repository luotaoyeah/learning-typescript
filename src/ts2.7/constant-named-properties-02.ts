/**
 * Const-named properties
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

let Foo = "Foo";
const Bar = "Bar";

const x = {
  [Foo]: "foo",
  [Bar]: 18
};

/* 'string */
console.log(typeof x[Foo]); // tslint:disable-line

/* 'number */
console.log(typeof x[Bar]); // tslint:disable-line

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
