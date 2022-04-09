/*
 * Type Guards
 *     Why doesn't x instanceof Foo narrow x to Foo?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     为什么有时候不能通过 instanceof 操作符缩小某个变量的可能类型范围？
   */

  function fn01(x: any) {
    if (x instanceof Object) {
      /*
       * 此处 x 的推断类型依然为 any 而不是 Object
       */
      console.log(x.length);
    }
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     在使用 instanceof 来缩小变量的类型范围时，
   *     根据变量的具体类型描述，可能会采取不一样的推断策略，
   *     典型的使用场景如上，当使用 instanceof Object 时，
   *     通常并不是希望将类型确定为 Object 类型，
   *     而是希望将类型确定为：该变量是不是一个 primitive 类型，而是一个'对象'类型
   *     因此，此时不会将变量的类型推断为 Object 类型
   */
}

export {};
