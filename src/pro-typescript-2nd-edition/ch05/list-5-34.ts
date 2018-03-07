/**
 * Listing 5-34. Extending objects in JavaScript
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

// @ts-ignore:
Array.prototype.myForEach = function (callback: Function) {
  // @ts-ignore:
  for (let item of this) {
    callback.call(item);
  }
};

// @ts-ignore:
[1, 2, 3].myForEach(function () {
  // @ts-ignore:
  console.log('item:', this); // tslint:disable-line
});

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};