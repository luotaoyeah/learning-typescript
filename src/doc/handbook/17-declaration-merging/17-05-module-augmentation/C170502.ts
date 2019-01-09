/*
 * Declaration Merging
 *     Module Augmentation
 *         Global augmentation
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 跟 module augmentation 类似，
 * 在一个模块中，还可以对全局对象进行增强，称之为 global augmentation
 */

declare global {
  interface Array<T> {
    myMap(): void;
  }
}

Array.prototype.myMap = function() {
  console.log("MAP");
};

[].myMap(); // MAP

export {};
