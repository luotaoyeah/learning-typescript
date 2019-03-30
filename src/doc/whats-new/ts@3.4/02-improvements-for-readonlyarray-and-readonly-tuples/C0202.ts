/**
 * Improvements for ReadonlyArray and Readonly Tuples
 *     readonly tuples
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ts@3.4 开始支持 readonly tuple，类似 readonly shorthand syntax array
   */

  function fn01(tup: readonly [string, number]) {
    console.log(tup[0]);
    // @ts-ignore: TS2540
    tup[1] = 0;
  }
}

export {};
