/**
 * Improvements for ReadonlyArray and Readonly Tuples
 *     A New Syntax for ReadonlyArray
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ReadonlyArray 是 TS 内置的一个类型，表示只读数组
   */

  function fn01(arr: ReadonlyArray<string>) {
    /*
     * 只读数组不能添加，删除，替换元素，下面的代码都会编译错误
     */
    // @ts-ignore: TS2339
    arr.push();
    // @ts-ignore: TS2542
    arr[0] = "0";
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * ts@3.4 引入了一种新的语法用来表示只读数组，
   * 即，在非泛型数组类型（string[]，number[]）前面加上 readonly 关键字
   */

  function fn01(arr: readonly string[]) {
    // @ts-ignore: TS2339
    arr.push();
    // @ts-ignore: TS2542
    arr[0] = "0";
  }
}

export {};
