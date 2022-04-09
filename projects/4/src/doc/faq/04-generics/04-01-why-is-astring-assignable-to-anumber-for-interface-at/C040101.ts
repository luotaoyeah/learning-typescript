/*
 * Generics
 *     Why is A<string> assignable to A<number> for interface A<T> { } ?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     问什么下面的类型 A<string> 和 A<number> 是类型兼容的？
   */

  interface A<T> {
    x: number;
  }

  let a: A<string> = { x: 9 };
  let b: A<number> = { x: 9 };
  a = b;
  b = a;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     TS 是 structural typing 的，因此在判断两个类型兼容性时，
   *     只会考虑两个类型的成员是否兼容，
   *     上面的接口 A 虽然定义了一个类型参数 T，
   *     但是这个 T 在接口中并没有使用，即它不影响对 A 的类型的判断
   * 最佳实践：不要声明不会使用的类型参数
   */

  interface A<T> {
    x: number;
    y: T;
  }

  let a: A<string> = { x: 9, y: "0" };
  const b: A<number> = { x: 9, y: 9 };

  // TS2322: Type 'A<number>' is not assignable to type 'A<string>'.
  //   Type 'number' is not assignable to type 'string'.
  // @ts-ignore
  a = b;
}

export {};
