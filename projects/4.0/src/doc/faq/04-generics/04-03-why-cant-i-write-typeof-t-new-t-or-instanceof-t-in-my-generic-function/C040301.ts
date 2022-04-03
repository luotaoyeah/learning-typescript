/*
 * Generics
 *     Why can't I write typeof T, new T, or instanceof T in my generic function?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     为什么不能对泛型参数使用 typeof，instanceof，new 等操作符？
   */

  function fn01<T>(x: T) {
    // @ts-ignore
    type T01 = typeof T; // TS2693: 'T' only refers to a type, but is being used as a value here.
    // @ts-ignore
    console.log({} instanceof T); // TS2693: 'T' only refers to a type, but is being used as a value here.
    // @ts-ignore
    console.log(new T()); // TS2693: 'T' only refers to a type, but is being used as a value here.
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     因为泛型参数是属于 type system 的东西，
   *     在 TS 编译为 JS 之后，会被完全删除，
   *     即，在运行时期，已经不存在泛型参数
   * 解决方法：
   *     可以使用 constructor signature 类型
   */

  function fn01<T>(Ctor: new (...args: Array<any>) => T) {
    type T01 = typeof Ctor;
    console.log({} instanceof Ctor);
    console.log(new Ctor());
  }
}

export {};
