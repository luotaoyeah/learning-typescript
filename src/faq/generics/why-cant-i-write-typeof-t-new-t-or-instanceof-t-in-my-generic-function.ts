/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-cant-i-write-typeof-t-new-t-or-instanceof-t-in-my-generic-function
 */

/**
 * Q:
 */
function doSomething<T>(x: T) {
  /*
    /!* TS2693: 'T' only refers to a type, but is being used as a value here. *!/
    let xType = typeof T;
  */
  /*
    /!* TS2359: The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type. *!/
    console.log(new Date() instanceof typeof T); // tslint:disable-line
  */
  /*
    /!* TS2693: 'T' only refers to a type, but is being used as a value here. *!/
    const t = new T();
  */
}

/**
 * A: Generics are erased during compilation. This means that there is no value T at runtime inside doSomething.
 * Using a construct signature and providing it as a parameter will do the right thing
 */

class Person {
  name: string = "tom";
}

function getInstance<T>(ctor: { new (): T }): T {
  return new ctor();
}

function isReallyInstanceOf<T>(ctor: { new (): T }, obj: T) {
  return obj instanceof ctor;
}

const person = getInstance(Person);
console.log(person); // tslint:disable-line
console.log(isReallyInstanceOf(Person, person)); // tslint:disable-line

export {};
