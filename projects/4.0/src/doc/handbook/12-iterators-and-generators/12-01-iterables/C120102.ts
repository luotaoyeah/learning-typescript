/*
 * Iterators and Generators
 *     Iterables
 *         Symbol.iterator
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * [Symbol.iterator] 方法，返回默认的迭代器
   */

  const arr: Array<string> = ["a", "b", "c"];
  const iterator: IterableIterator<string> = arr[Symbol.iterator]();
  console.log(iterator.next()); // { value: 'a', done: false }
  console.log(iterator.next()); // { value: 'b', done: false }
  console.log(iterator.next()); // { value: 'c', done: false }
  console.log(iterator.next()); // { value: undefined, done: true }
}

export {};
