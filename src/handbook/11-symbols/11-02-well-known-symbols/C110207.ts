/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.toStringTag
 *
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对象的 toString() 方法，默认返回为 [object Object]
   * 可以通过 [Symbol.toStringTag] 属性，指定返回值中 Object 部分的实际数据
   */

  class Foo {}

  class Bar {
    get [Symbol.toStringTag]() {
      return "Bar";
    }
  }

  console.log(new Foo().toString()); // [object Object]
  console.log(new Bar().toString()); // [object Bar]
}

export {};
