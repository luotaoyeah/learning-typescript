describe("src/doc/whats-new/ts@3.6/stricter-generators/01.ts", () => {
  /*
   * generator 中涉及到的三个值, 现在都可以正确判断类型
   *   1. yield 值的类型
   *   2. return 值的类型
   *   3. next() 参数的类型
   */
  it("should work", () => {
    function* generator01() {
      const s01: string = yield 9;
      return s01 === "0";
    }

    const iterator = generator01();

    const y = iterator.next();
    if (y.done) {
      // return 值的类型为 `boolean`
      console.assert(typeof y.value === "boolean");
    } else {
      // yield 值的类型为 `number`
      console.assert(typeof y.value === "number");
    }

    // next() 参数的类型为 string
    iterator.next("0");
  });

  /*
   * 在定义 generator 的时候, 也可以显式指定这三个类型
   */
  it("should work 02", () => {
    function* generator01(): Generator<number, boolean, string> {
      const s01: string = yield 9;
      return s01 === "0";
    }
  });
});
