describe('src/doc/whats-new/ts@2.7/improved-type-inference-for-object-literals', () => {
  it('should work 01', () => {
    /*
     * 当一个 union type 是由多个 object literal 组成时, 对该 union type 的类型推断更加准确
     */

    // obj 的类型被推断为 { a: number; b: number } | { a: string; b?: undefined } | { a?: undefined; b?: undefined }
    const obj = [{ a: 1, b: 2 }, { a: 'abc' }, {}][0];

    // 属性 a 的类型被推断为 string | number | undefined
    expect(obj.a).toEqual(1);

    // 属性 b 的类型被推断为 number | undefined
    expect(obj.b).toEqual(2);
  });
});
