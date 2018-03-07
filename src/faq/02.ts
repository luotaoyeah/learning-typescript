/**
 * Why are functions returning non-void assignable to function returning void?
 */


function doSomething(): number {
  return 42;
}

function callMeMaybe(callback: () => void) {
  callback();
}

callMeMaybe(doSomething);

export {};
