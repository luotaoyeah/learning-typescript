/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-do-these-empty-classes-behave-strangely
 */

/*
 * Q: Why all types assignable to empty class ?
 */
class Empty {}

/* no error */
const x: Empty = global;

/*
 * A: In general, you should never declare a class with no properties
 */

class A {
  name: string = "tom";
  age: number;
}

class B extends A {}

class C extends A {}

function test(x: A): void {
  console.log("name:", x.name); // tslint:disable-line
}

test(new A());
test(new B());
test(new C());

export {};
