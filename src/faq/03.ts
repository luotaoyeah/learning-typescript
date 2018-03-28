/**
 * Why are functions with fewer parameters assignable to functions that take more parameters?
 */

function doSomething(name: string): string {
  console.log(name);
  return name;
}

function callMeMaybe(callback: (name: string, age: number) => void) {
  callback("tom", 18);
}

callMeMaybe(doSomething);

export {};
