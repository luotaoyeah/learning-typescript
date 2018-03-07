/**
 * Improved handling of structurally identical classes and instanceof expressions
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class A {
  name: string = "tom";
}

class B extends A {
  foo: number;

  constructor(foo: number) {
    super();
    this.foo = foo;
  }
}

class C extends A {
  bar: number;

  constructor(bar: number) {
    super();
    this.bar = bar;
  }
}

function test(x: A) {
  if (x instanceof B) {
    console.log(x.foo); // tslint:disable-line
  } else if (x instanceof C) {
    console.log(x.bar); // tslint:disable-line
  } else if (x instanceof A) {
    console.log(x.name); // tslint:disable-line
  }
}

test(new A());
test(new B(18));
test(new C(20));

/*  */
test({
  name: "cat"
});

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
