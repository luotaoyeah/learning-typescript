/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.species
 *
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * [Symbol.species] 方法，
   * 存在于构造函数上，是构造函数上的一个静态方法，
   * 通常，该方法就是构造函数本身
   */

  console.log(RegExp[Symbol.species] === RegExp); // true
  console.log(Array[Symbol.species] === Array); // true
  console.log(Uint8Array[Symbol.species] === Uint8Array); // true
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   *
   */

  class MyArray<T> extends Array<T> {
    static get [Symbol.species]() {
      console.log("[Symbol.species]"); // [Symbol.species]
      return Array;
    }
  }

  const arr: MyArray<number> = new MyArray(1, 2, 3);
  const map: Array<number> = arr.map(i => i * i);
  console.log(map instanceof MyArray); // false
  console.log(map instanceof Array); // true
}

export {};
