/**
 * Listing 5-37. Turning an extension into a polyfill
 */

console.log("----------");

interface Array<T> {
  myForEach(callback: (item: number) => any): void;
}

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function(callback: Function) {
    for (let item of this) {
      callback.call(item, item);
    }
  };
}

console.log("----------");
