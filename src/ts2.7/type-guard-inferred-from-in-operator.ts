/**
 * Type guards inferred from in operator
 */

console.log("----------");

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
      console.log(t.name);
    } else {
      console.log(t.score);
    }
  } else {
    console.log(t.foo);
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

console.log("----------");
export {};
