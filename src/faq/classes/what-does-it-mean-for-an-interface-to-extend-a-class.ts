/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
 */

/*
 * Q:
 */

class FooError extends Error {
  constructor(message: string) {
    super(message);
  }

  hello() {
    console.log("hello ", this.message); // tslint:disable-line
  }
}

const fooError = new FooError("FooError");
fooError.hello();

console.log(new FooError("FooError02") instanceof FooError); // tslint:disable-line

export {};
