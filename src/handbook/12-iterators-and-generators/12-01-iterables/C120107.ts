/*
 * Iterators and Generators
 *     Iterables
 *         for...in
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Set 默认实现了 [Symbol.iterator] 方法
   */

  const set = new Set(["a", "b", "c"]);
  set["x"] = "x";
  set["y"] = "y";

  for (const i of set) {
    // a
    // b
    // c
    console.log(i);
  }

  for (const i in set) {
    // x
    // y
    console.log(i);
  }
}

export {};
