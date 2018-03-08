/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#whats-the-difference-between-bar-and-typeof-bar-when-bar-is-a-class-
 */

/*
 * Q:
 */
class MyClass {
  someMethod() {}
}

/*
  /!* TS2322: Type 'typeof MyClass' is not assignable to type 'MyClass'.  *!/
  const myClass: MyClass = MyClass;
*/

/**
 * A: Class has 'instance side' and 'static side'
 */

const myClass: typeof MyClass = MyClass;

export {};
