/**
 * Listing 5-9. Passing a function as an argument
 */

console.log("----------");

function go(this: any, callback: (str: string) => void): void {
  callback.call(this, "tom");
}

function callbackFn(name: string) {
  console.log("name:", name);
}

go(callbackFn);

console.log("----------");
export {};
