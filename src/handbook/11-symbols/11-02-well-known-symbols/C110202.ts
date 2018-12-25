/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.isConcatSpreadable
 *
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Symbol.isConcatSpreadable 布尔属性，
   * 存在 array 对象，或者 array-like 对象上，
   * 用来标识：
   *     在使用 Array.prototype.concat() 方法时，
   *     是否对它的元素进行平化
   */

  /*
   * 对于 array 对象，默认是：进行平化
   */
  const arr01 = ["a", "b", "c"];
  const arr02 = ["A", "B", "C"];
  console.log(arr01.concat(arr02)); // [ 'a', 'b', 'c', 'A', 'B', 'C' ]

  arr02[Symbol.isConcatSpreadable] = false;
  console.log(arr01.concat(arr02)); // [ 'a', 'b', 'c', [ 'A', 'B', 'C', [Symbol(Symbol.isConcatSpreadable)]: false ] ]
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 对于 array-like 对象，默认是：不平化
   */

  const arr01 = ["a", "b", "c"];
  const arr02 = { 0: "A", 1: "B", 2: "C", length: 3 };
  console.log(arr01.concat(arr02 as any)); // [ 'a', 'b', 'c', { '0': 'A', '1': 'B', '2': 'C', length: 3 } ]

  arr02[Symbol.isConcatSpreadable] = true;
  console.log(arr01.concat(arr02 as any)); // [ 'a', 'b', 'c', 'A', 'B', 'C' ]
}

export {};
