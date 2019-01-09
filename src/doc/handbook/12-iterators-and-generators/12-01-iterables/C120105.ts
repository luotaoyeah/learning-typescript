/*
 * Iterators and Generators
 *     Iterables
 *         for...of
 *         for...in
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * for...of 用来遍历 iterable 对象，即被遍历的对象需要实现 [Symbol.iterator] 方法，
   * for...in 用来遍历普通对象（包括 iterable 对象），遍历的是对象的属性
   */

  const arr: Array<string> = ["a", "b", "c"];

  for (const i of arr) {
    // a
    // b
    // c
    console.log(i);
  }

  for (const i in arr) {
    // 0
    // 1
    // 2
    console.log(i);
  }
}

export {};
