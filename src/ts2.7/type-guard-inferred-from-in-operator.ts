/**
 * Type guards inferred from in operator
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

interface A {
  x: string;
  a: number;
  name: string;
}

interface B {
  x: string;
  b: number;
  score: number;
}

interface C {
  y: number;
  foo: string;
}

function test(t: A | B | C) {
  if ("x" in t) {
    if ("a" in t) {
      console.log(t.name); // tslint:disable-line
    } else {
      console.log(t.score); // tslint:disable-line
    }
  } else {
    console.log(t.foo); // tslint:disable-line
  }
}

test({
  x: "x",
  a: 18,
  name: "tom"
});

test({
  y: 20,
  foo: "foo"
});

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
