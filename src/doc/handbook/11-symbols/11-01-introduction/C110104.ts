/*
 * Symbols
 *     Introduction
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 Object.getOwnPropertyNames() 只能获取 string 类型的属性名称列表，
   * 需要使用 Object.getOwnPropertySymbols() 获取 symbol 类型的属性名称列表
   */

  const obj = {
    foo: "FOO",
    bar: "BAR",
    [Symbol("foo")]: "FOO",
    [Symbol("bar")]: "BAR"
  };

  console.log(Object.getOwnPropertyNames(obj)); // [ 'foo', 'bar' ]
  console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(foo), Symbol(bar) ]
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 可以使用 Reflect.ownKeys() 获取 string 类型以及 symbol 类型的属性名称列表
   */
  const obj = {
    foo: "FOO",
    bar: "BAR",
    [Symbol("foo")]: "FOO",
    [Symbol("bar")]: "BAR"
  };

  console.log(Reflect.ownKeys(obj)); // [ 'foo', 'bar', Symbol(foo), Symbol(bar) ]
}

export {};
