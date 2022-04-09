describe('src/doc/whats-new/ts@2.7/improved-handling-of-structurally-identical-classes-and-instanceof-expressions/01.ts', () => {
  it('should work 01', () => {
    /*
     * instanceof 可以区分结构完全相同的两个类
     */

    class C01 {}
    class C03 extends C01 {}
    class C02 extends C01 {}

    function f01(x: C02 | C03) {
      if (x instanceof C02) {
        expect(x instanceof C02).toBe(true);
      } else {
        expect(x instanceof C03).toBe(true);
      }
    }

    f01(new C02());
    f01(new C03());
  });

  it('should work 02', () => {
    /*
     * 两个结构完全相同的类, 作为同一个 union type 的元素, 它们都会被保留
     */

    class C01 {}
    class C02 {}

    // c01 的类型为 `C01 | C02`,
    // 虽然 C01 和 C02 结构完全相同, 但是它们都被保留
    const c01 = !true ? new C01() : new C02();
  });

  it('should work 03', () => {
    /*
     * 一个 union type 中的两个元素 A 和 B, 如果 B 继承者 A, 并且 B 是 A 的子类型, 则只会保留 A
     */

    class C01 {}
    class C02 extends C01 {}
    class C03 extends C01 {}
    class C04 extends C01 {
      x: string;
    }
    class C05 extends C04 {}

    // 首先推断 c01 的类型为 (C02 | C03 | C04 | C05)[],
    // 虽然 C02 和 C03 结构完全相同, 但是它们没有继承关系, 它们都被保留,
    // 由于 C05 继承自 C04 并且 C05 是 C04 的子类, 因此只保留 C04,
    // 最后 c01 的类型为 (C02 | C03 | C04 )[]
    const c01 = [new C02(), new C03(), new C04(), new C05()];
  });
});
