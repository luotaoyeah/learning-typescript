/**
 * Listing 5-35. Extending objects in TypeScript
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

interface Array<T> {
  myForEach(callback: () => any): void;
}

Array.prototype.myForEach = function (callback: Function) {
  for (let item of this) {
    callback.call(item);
  }
};

[1, 2, 3].myForEach(function (this: any) {
  console.log('item:', this); // tslint:disable-line
});

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line