/* eslint-disable @typescript-eslint/ban-types */
describe('src/doc/whats-new/ts@2.8/conditional-types/01.ts', () => {
  it('should work 01', () => {
    /*
     * 条件类型(conditional type)类似于条件表达式, 根据条件是否成立, 决定结果类型,
     * 形式为 T extends U ? X : Y
     * 如果 T 是 U 的子类型, 则结果类型为 X, 否则结果类型为 Y
     */

    // 条件 true extends boolean 成立, 因此结果类型为 `string`
    type T01 = true extends boolean ? string : number;
    const t01: T01 = '0';

    // 条件 0 extends boolean 不成立, 因此结果类型为 `number`
    type T02 = 0 extends boolean ? string : number;
    const t02: T02 = 0;
  });

  it('should work 02', () => {
    /*
     * conditional type 通常包含一个类型参数, 从而实现动态类型
     */

    type TypeName<T> = T extends string
      ? 'string'
      : T extends number
      ? 'number'
      : T extends boolean
      ? 'boolean'
      : T extends undefined
      ? 'undefined'
      : T extends Function
      ? 'function'
      : 'object';

    // "string"
    type T01 = TypeName<string>;
    // "number"
    type T02 = TypeName<number>;
    // "boolean"
    type T03 = TypeName<true>;
    // "undefined"
    type T04 = TypeName<undefined>;
    // "function"
    type T05 = TypeName<() => {}>;
    // "object"
    type T06 = TypeName<null>;
    // "object"
    type T07 = TypeName<[]>;
  });
});
