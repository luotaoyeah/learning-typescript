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

  for (const i of obj) {
    // 1
    // 2
    // 3
    console.log(i);
  }
}

export {};
