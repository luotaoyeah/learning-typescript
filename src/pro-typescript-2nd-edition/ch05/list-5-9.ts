/**
 * Listing 5-9. Passing a function as an argument
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function go(this: any, callback: (str: string) => void): void {
  callback.call(this, "tom");
}

function callbackFn(name: string) {
  console.log("name:", name); // tslint:disable-line
}

go(callbackFn);

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
