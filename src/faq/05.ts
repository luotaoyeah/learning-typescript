/**
 * Why are getters without setters not considered read-only?
 */

class Foo {
  get bar() {
    return "bar";
  }
}

const foo = new Foo();
/*
foo.bar = 'tom';
*/

export {};
