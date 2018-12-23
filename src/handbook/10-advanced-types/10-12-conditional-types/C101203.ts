/*
 * Advanced Types
 *     Conditional Types
 *         defer
 */

console.log("\n-------------------------------------------------- 01");
{
  interface Foo {
    a: boolean;
    b: boolean;
  }

  function f<T>(t: T): T extends Foo ? string : number {
    return t as any;
  }

  /*
   * f() 函数的返回类型为：T extends Foo ? string : number
   * 此时 T 的实际类型为 U，所以返回类型为：U extends Foo ? string : number
   * 因为条件类型中的 T 包含了其他的类型参数 U，因此结果类型会被推迟，
   * 因此，此时的结果类型为成员类型的联合类型：string | number
   */
  function foo<U>(u: U) {
    // TS2322: Type 'U extends Foo ? string : number' is not assignable to type 'string'.
    //   Type 'string | number' is not assignable to type 'string'.
    //     Type 'number' is not assignable to type 'string'.
    // @ts-ignore
    let y: string = f(u);
  }
}

export {};
