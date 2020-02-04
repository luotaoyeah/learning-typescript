describe('src/doc/whats-new/ts@2.7/unique-symbol/01.ts', () => {
  /*
   * 我们知道, numeric literal 类型, 表示该变量的值只能是这个 numeric literal,
   * string literal 类型同理,
   * 那么如何表示一个 symbol literal 呢?
   * `unique symbol` 是一个新的类型, 它是 `symbol` 的子类型, 它就是用来表示 symbol literal 类型的,
   */

  /*
   * `symbol`        类型的变量, 可以被赋值任意的 symbol 类型的值,
   * `unique symbol` 类型的变量, 它的值是唯一的
   */
  it('should work 01', () => {
    let s01: symbol = Symbol('FOO');
    console.assert(typeof s01 === 'symbol');
    s01 = Symbol('BAR');
    console.assert(typeof s01 === 'symbol');

    const s02: unique symbol = Symbol('FOO');
    console.assert(typeof s02 === 'symbol');
  });

  it('should work 02', () => {
    // `unique symbol` 类型必须声明为 const 变量, 或者 readonly static 字段
    const s01: unique symbol = Symbol();

    class C01 {
      public static readonly s02: unique symbol = Symbol();
    }
  });

  it('should work 03', () => {
    /*
     * 有三种方式用来创建一个 unique symbol 类型的数据:
     *   1. 显式声明类型为 `unique symbol`
     *   2. 使用 `Symbol()` 或者 `Symbol.for()`, 自动推断类型
     *   3. 使用 `typeof`
     */
    const s01: unique symbol = Symbol();
    // 自动推断类型时, 会优先推断为 `unique symbol` 类型,
    // 如果不满足条件, 则会推断为 `symbol` 类型
    const s02 = Symbol();
    const s03 = Symbol.for('s01');
    const s04: typeof s01 = s01;

    console.assert(typeof s04 === 'symbol');
  });
});
