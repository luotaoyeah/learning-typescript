/*
 * Generics
 *     Why doesn't type inference work on this interface: interface Foo<T> { } ?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     为什么 b 的类型不能正确地被推断为 string ？
   */

  interface A<T> {
    x: number;
  }

  class B<T> implements A<T> {
    x: number = 9;
  }

  function fn01<T>(t: A<T>): T {
    return undefined as any;
  }

  /*
   * b 的推断类型为 {}
   */
  const b = fn01(new B<string>());
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     因为 A 的类型参数 T 没有使用，不影响最终的类型判断，
   *     当 TS 在推断函数中的 T 的实际类型时，会去看参数 t 中的成员，
   *     看有没有哪个成员的类型是 T，然后并没有，
   *     因此 TS 不知道 T 的实际类型，因此推断类型为 {}
   */

  interface A<T> {
    x: number;
    y: T;
  }

  class B<T> implements A<T> {
    x: number = 9;
    y: T;
  }

  function fn01<T>(t: A<T>): T {
    return undefined as any;
  }

  /*
   * A 的类型参数 T 被使用了，因此可以正确推断出 b 的类型
   */
  const b = fn01(new B<string>());
}

export {};
