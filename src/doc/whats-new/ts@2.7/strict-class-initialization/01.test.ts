describe('src/doc/whats-new/ts@2.7/strict-class-initialization/01.ts', () => {
  /*
   * 如果开启了 `strictPropertyInitialization` 选项,
   * 则类的字段不能为 `undefined` 类型(除非显示声明), 字段必须赋初始值:
   *   1. 在声明字段的时候赋初始值
   *   2. 在 constructor 中赋值
   */
  it('should work 01', () => {
    class C01 {
      public x: number = 0;
      public y: number;

      // 如果字段的值可以为 `undefined`, 则类型中必须显示声明 `undefined` 类型
      public z: number | undefined;

      public constructor() {
        this.y = 0;
      }
    }

    const c01 = new C01();
    console.assert(c01.x === 0);
    console.assert(c01.y === 0);
    console.assert(c01.z === undefined);
  });
});
