/*
 * Iterators and Generators
 *     Iterables
 *         for...of
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * for...of 循环，会自动调用对象的 [Symbol.iterator] 方法，获取默认的 iterator
   */

  let flag: boolean = true;

  Array.prototype[Symbol.iterator] = new Proxy(
    Array.prototype[Symbol.iterator],
    {
      apply(target: any, thisArg: any, argArray?: any): any {
        if (flag) {
          flag = false;
          console.log("[Symbol.iterator]"); // [Symbol.iterator]
        }
        return target.apply(thisArg, argArray);
      }
    }
  );

  const arr = ["a", "b", "c"];
  for (const i of arr) {
    console.log(i);
  }
}

export {};
