/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#when-and-why-are-classes-nominal
 */

/*
 * Q: What explains the difference between these two lines of code?
 */
class A {
  x: number;
}

class B {
  x: number;
}

class C {
  private x: number;
}

class D {
  private x: number;
}

let a = new A();
let b = new B();
let c = new C();
let d = new D();

a = b;

/*
  /!* TS2322: Type 'D' is not assignable to type 'C'. Types have separate declarations of a private property 'x'. *!/
  c = d;
*/

/*
 * A: In TypeScript, classes are compared structurally.
 * The one exception to this is private and protected members.
 * When a member is private or protected,
 * it must originate in the same declaration to be considered the same as another private or protected member.
 */

export {};
