/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.iterator
 *
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * [Symbol.iterator] 方法，
   * 实现 iterable protocol 的对象，必须实现该方法，
   * 该方法返回该对象的默认迭代器
   *
   * 在使用 for...of 循环时，会调用该方法获取默认迭代器
   */

  const obj = {
    num: 1,
    [Symbol.iterator]() {
      return {
        next: () => {
          const done = this.num > 3;
          const value = this.num++;
          return { value, done };
        }
      };
    }
  };

  const arr: Array<number> = [];
  for (const i of obj) {
    arr.push(i);
  }
  console.log(arr); // [ 1, 2, 3 ]
}

export {};
