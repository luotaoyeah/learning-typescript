/*
 * Symbols
 *     Introduction
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟 string 一样，
   * symbol 可以用作对象的属性名称
   */

  const obj = {
    [Symbol()]: "FOO"
  };

  console.log(obj); // { [Symbol()]: 'FOO' }
}

console.log("\n-------------------------------------------------- 02");
{
  const symbol = Symbol();
  class Person {
    [symbol]() {
      console.log("FOO");
    }
  }

  new Person()[symbol](); // FOO
}

export {};
