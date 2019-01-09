/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-does-this-get-orphaned-in-my-instance-methods
 */

/*
 * Q: Why 'this' points to 'global' ?
 */
class MyClass {
  x: number = 18;

  someCallback() {
    console.log("x:", this.x);
    this.someMethod();
  }

  someMethod() {
    console.log("x:", this.x);
  }
}

const myClass = new MyClass();

/*
  /!* TypeError: this.someMethod is not a function *!/
  global.setTimeout(myClass.someCallback, 10);
*/

/* solution 1 */
global.setTimeout(myClass.someCallback.bind(myClass), 10);

/* solution 2 */
global.setTimeout(() => {
  myClass.someCallback();
}, 10);

export {};
