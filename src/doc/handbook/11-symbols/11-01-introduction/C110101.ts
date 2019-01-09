/*
 * Symbols
 *     Introduction
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * symbol 是 ECMA2015 引入的一个新的原始类型，
   * JS 共有 6 个原始类型：
   *     string
   *     number
   *     boolean
   *     null
   *     undefined
   *     symbol
   */

  /*
   * 通过 Symbol() 方法，创建 symbol 实例
   */

  const symbol = Symbol();
  console.log(symbol); // Symbol()
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * Symbol() 方法可以接收一个参数，表示 symbol 实例的描述信息
   */

  const symbol = Symbol("FOO");
  console.log(symbol); // Symbol(FOO)
}

export {};
