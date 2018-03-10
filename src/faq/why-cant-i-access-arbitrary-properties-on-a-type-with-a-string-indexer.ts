/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-cant-i-access-arbitrary-properties-on-a-type-with-a-string-indexer
 */

interface StringMap {
  [index: string]: string;
}

function f(obj: StringMap) {
  console.log(obj.foo); // tslint:disable-line
  console.log(obj["foo"]); // tslint:disable-line
}

f({});

export {};
