describe('src/doc/whats-new/ts@2.7/constant-named-properties/01.ts', () => {
  /*
   * 属性名可以是一个常量
   */
  it('should work', () => {
    // 可以是 string 类型的常量
    const P01 = 'P01';
    // 可以是 number 类型的常量
    const P02 = 2;
    // 可以是 symbol 类型的常量
    const P03 = Symbol('P03');

    interface I01 {
      // 接口的属性名可以是 const-named
      [P03](): number;
    }

    class C01 implements I01 {
      // 类的方法名/字段名可以是 const-named
      public [P02]: number = 2;

      public static [P01](): number {
        return 1;
      }

      public [P03](): number {
        return 3;
      }
    }

    expect(C01[P01]()).toEqual(1);

    const c01 = new C01();
    expect(c01[P02]).toEqual(2);
    expect(c01[P03]()).toEqual(3);
  });

  /*
   * object literal 的属性名可以是 const-named
   */
  it('should work 02', () => {
    const P01 = 'P01';

    const obj01 = {
      [P01]: 1,
    };

    expect(obj01[P01]).toEqual(1);
  });
});
