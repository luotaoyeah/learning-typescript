/*
 * Generics
 *     Generic Types
 */

function identity<T>(arg: T): T {
  return arg;
}

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 泛型函数的类型标注如下：将类型参数（<T>）放在前面；
   */

  let i: <T>(arg: T) => T = identity;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 类型标注中的泛型参数，可以使用其他的名称；
   */

  let i: <U>(arg: U) => U = identity;
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 泛型函数的类型标注，可以写成 call signature 的形式；
   */

  let i: { <T>(arg: T): T } = identity;
}

console.log("\n-------------------------------------------------- 04");
{
  /*
   * 因为接口可以用来定义一个 call signature，
   * 此时，接口中的 call signature 可以声明为一个泛型的 call signature；
   */

  interface IGenericIdentity {
    <T>(arg: T): T;
  }

  let i: IGenericIdentity = identity;
}

console.log("\n-------------------------------------------------- 05");
{
  /*
   * 可以将接口中的 call signature 的泛型参数，提升到接口上面，使之成为一个泛型接口，
   * 此时，在接口中的任意位置，都可以使用该泛型参数；
   * 此时，在使用该泛型接口时，必须指明其泛型参数的实际类型；
   */

  interface IGenericIdentity<T> {
    (arg: T): T;
  }

  let i: IGenericIdentity<number> = identity;
}

export {};
