describe("src/doc/whats-new/ts@2.7/constant-named-properties/01.ts", () => {
  /*
   * 支持使用常量作为属性名称,
   * 可以是普通的常量, 也可以是一个 `symbol` 对象
   */
  it("should work", () => {
    const KEY = Symbol("serialize-method-key");

    interface ISerializable {
      [KEY](name: string): string;
    }

    class MySerializable implements ISerializable {
      public [KEY](name: string): string {
        return name.toUpperCase();
      }
    }

    expect(new MySerializable()[KEY]("tom")).toEqual("TOM");
  });
});
