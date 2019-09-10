/**
 * Higher order type inference from generic functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 高阶函数（Higher Order Function），其参数和返回值也都是函数，
   * 如果参数函数不是泛型函数（generic function），则返回函数的类型可以正确地被推断出来
   */

  /**
   * 高阶函数
   * @param f 函数参数
   * @param g 函数参数
   */
  function compose<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
    return (x: A) => g(f(x));
  }

  interface IPerson {
    name: string;
    age: number;
  }

  function fn01(person: IPerson): string {
    return person.name.toUpperCase();
  }

  function fn02(str: string): number {
    return str.length;
  }

  /*
   * 下面的 fn03() 的类型可以被正确地推断出来：(person: IPerson) => number
   */
  const fn03 = compose(fn01, fn02);

  console.assert(fn03({ name: "foo", age: 99 }).toFixed(2) === "3.00");
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果高阶函数的参数函数是泛型函数，则返回函数的类型会被丢失，无法正确推断，
   * ts@3.4 修正了这个问题
   */

  /**
   * 高阶函数
   * @param f 参数函数
   * @param g 参数函数
   */

  function compose<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
    return (x: A) => g(f(x));
  }

  interface IBox<T> {
    value: T;
  }

  function makeArray<T>(t: T): Array<T> {
    return [t];
  }

  function makeBox<U>(u: U): IBox<U> {
    return { value: u };
  }

  /*
   * 下面的 fn03 的类型现在也可以被正确地推断出来：<T>(t: T) => IBox<Array<T>>
   */
  const fn03 = compose(makeArray, makeBox);

  console.assert(fn03("foo").value[0].toUpperCase() === "FOO");
}

export {};
