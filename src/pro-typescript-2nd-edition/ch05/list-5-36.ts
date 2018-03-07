/**
 * Listing 5-36. Improved TypeScript object extensions
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

interface Array<T> {
  myForEach(callback: (item: number) => any): void;
}

Array.prototype.myForEach = function(callback: Function) {
  for (let item of this) {
    callback.call(item, item);
  }
};

[1, 2, 3].myForEach(function(item: number) {
  console.log("item:", item, item.toFixed(2)); // tslint:disable-line
});

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
