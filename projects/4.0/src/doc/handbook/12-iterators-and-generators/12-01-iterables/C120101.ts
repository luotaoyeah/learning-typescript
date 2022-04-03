/*
 * Iterators and Generators
 *     Iterables
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * iterable 对象是指实现了 iterable protocol 的对象，
   * 具体是指：实现 [Symbol.iterator] 方法，
   * 该方法返回对象的默认迭代器
   *
   * JS 内置的 iterable type 默认都实现了 [Symbol.iterator] 方法，如：
   * Array，Set，Map，String，Int32Array，Uint32Array
   */

  console.log(Set.prototype[Symbol.iterator]); // [Function: values]
  console.log(Map.prototype[Symbol.iterator]); // [Function: entries]
  console.log(Array.prototype[Symbol.iterator]); // [Function: values]
  console.log(String.prototype[Symbol.iterator]); // [Function: [Symbol.iterator]]
  console.log(Int32Array.prototype[Symbol.iterator]); // [Function: values]
  console.log(Uint32Array.prototype[Symbol.iterator]); // [Function: values]
}

export {};
