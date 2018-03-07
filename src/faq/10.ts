/**
 * How do I check at run-time if an object implements some interface?
 */

interface SomeInterface {
  name: string;
  length: number;
}

interface SomeOtherInterface {
  questions: string[];
}

/* user defined type guard */
function isSomeInterface(x: any): x is SomeInterface {
  return typeof x.name === "string" && typeof x.length === "number";
}

function f(x: SomeInterface | SomeOtherInterface) {
  if (isSomeInterface(x)) {
    console.log(x.name); // tslint:disable-line
  } else {
    console.log(x.questions); // tslint:disable-line
  }
}

f({ name: "tom", length: 18 });

export {};
