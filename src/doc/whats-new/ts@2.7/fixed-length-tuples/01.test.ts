describe('src/doc/whats-new/ts@2.7/fixed-length-tuples/01.ts', () => {
  it('should work 01', () => {
    /*
     * tuple 的类型信息中, 不仅包含了每个元素的类型, 还包含元素个数,
     * 如下的 T01 和 T02 是等价的
     */

    type T01 = [number, string];
    const t01: T01 = [0, '0'];

    interface T02 extends Array<string | number> {
      0: number;
      1: string;
      length: 2; // 元素个数也是 tuple 类型的一部分
    }
    const t02: T02 = t01;
  });

  it('should work 02', () => {
    /*
     * 如果两个 tuple 类型的元素个数不同, 则它们一定不兼容
     */

    const t01: [number, string] = [0, '0'];

    // @ts-ignore TS2322
    const t02: [number, string, string] = t01;
  });
});
