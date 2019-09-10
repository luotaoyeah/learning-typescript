/**
 * Listing 5-35. Extending objects in TypeScript
 */

console.log("----------");

interface Array<T> {
  myForEach(callback: () => any): void;
}

Array.prototype.myForEach = function(callback: Function) {
  for (const item of this) {
    callback.call(item);
  }
};

[1, 2, 3].myForEach(function(this: any) {
  console.log("item:", this);
});

console.log("----------");
