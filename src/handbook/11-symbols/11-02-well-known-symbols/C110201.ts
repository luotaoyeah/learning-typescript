/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.hasInstance
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * JS 预定义了很多常用的 symbol，它们称之为 well-known symbols
   * 通常可以使用 @@someSymbol 的形式来标识，比如：
   *     Symbol.iterator 可以标识为 @@iterator
   */

  console.log(Symbol.hasInstance); // Symbol(Symbol.hasInstance)
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 构造函数的 [Symbol.hasInstance] 静态方法，
   * 用来判断一个对象是否是该构造函数的实例对象，
   * 在使用 instanceof 操作符时，会自动调用该方法，
   * 该方法的第一个参数，表示要进行判断的实例对象
   */
  class Person {
    constructor(public name: string) {}

    static [Symbol.hasInstance](obj: any) {
      return obj.name === "FOO";
    }
  }

  console.log(new Person("FOO") instanceof Person); // true
  console.log(new Person("BAR") instanceof Person); // false
}

export {};
