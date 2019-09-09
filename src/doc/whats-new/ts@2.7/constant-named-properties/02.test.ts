describe("src/doc/whats-new/ts@2.7/constant-named-properties/02.ts", () => {
  /*
   * 除了类的属性可以使用常量作为属性名称之外, object literal 的属性也可以
   */
  it("should work", () => {
    const K01 = "K01";
    const K02 = "K02";

    const obj = {
      [K01]: 9,
      [K02]: "foo"
    };

    /*
     * a 和 b 的类型都可以正确推断出来
     */
    const a = obj[K01];
    expect(a.toFixed(2).toString()).toEqual("9.00");

    const b = obj[K02];
    expect(b.toUpperCase()).toEqual("FOO");
  });
});
