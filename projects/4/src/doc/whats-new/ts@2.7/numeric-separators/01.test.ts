describe('src/doc/whats-new/ts@2.7/numeric-separators', () => {
  it('should work 01', () => {
    /*
     * numeric literal 中可以包含 `_`, 用来提高易读性
     */

    const n01 = 1000_000_000;
    expect(n01).toBe(10_00_00_00_00);
  });
});
