describe('src/doc/whats-new/ts@2.7/definite-assignment-assertions/01.ts', () => {
  it('should work 01', () => {
    /*
     * 如果某个变量/字段确实已经被赋值了(比如使用依赖注入), 但是 typescript 无法检测出来,
     * 此时可以在定义该变量/字段时使用 ! 后缀显式标注, 让 typescript 不再报错
     */

    let x!: number;

    init();

    expect(x).toEqual(1);

    function init() {
      x = 1;
    }
  });

  it('should work 02', () => {
    class C01 {
      public x!: number;

      public constructor() {
        this.init();
      }

      private init() {
        this.x = 1;
      }
    }

    const c01 = new C01();
    expect(c01.x).toEqual(1);
  });
});
