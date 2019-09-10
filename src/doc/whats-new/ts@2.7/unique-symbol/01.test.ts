describe("src/doc/whats-new/ts@2.7/unique-symbol/01.ts", () => {
  /*
   * 我们知道, numeric literal 类型的变量, 表示该变量的值只能是这个 numeric literal, string literal 同理,
   * 那么如何表示一个 symbol literal 呢?
   * `unique symbol` 是一个新的类型, 它是 `symbol` 的子类型, 它就是用来表示 symbol literal 类型的,
   */

  /*
   * `symbol` 类型的变量可以赋值其他的值
   */
  it("should work", () => {
    let s01: symbol = Symbol();
    console.assert(typeof s01 === "symbol");

    s01 = Symbol();
    console.assert(typeof s01 === "symbol");
  });

  /*
   * `unique symbol` 类型的变量, 不能赋值其他的值,
   * 并且, 只能用 `const` 来声明, 不能用 `let` 来声明
   */
  it("should work 01", () => {
    /*
     * 有三种方式用来创建一个 unique symbol 类型的数据:
     *   1. 显式声明类型为 `unique symbol`
     *   2. 使用 `Symbol()` 或者 `Symbol.for()` 时, 会自动推断类型
     *   3. 使用 `typeof`
     */
    const s01: unique symbol = Symbol();
    const s02 = Symbol();
    const s03 = Symbol.for("s01");
    const s04: typeof s01 = s01;
  });
});
