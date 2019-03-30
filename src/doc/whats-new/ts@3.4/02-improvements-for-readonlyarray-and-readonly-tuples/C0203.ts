/**
 * Improvements for ReadonlyArray and Readonly Tuples
 *     readonly Mapped Type Modifiers and readonly Arrays
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于普通的 mapped type 来说，array 和 tuple 都可以正常地工作
   */

  interface Box<T> {
    value: T;
  }

  type Boxify<T> = { [K in keyof T]: Box<T[K]> };

  type A = Boxify<{ x: string; y: number }>;

  type B = Boxify<string[]>;

  type C = Boxify<[string, number]>;
}

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 ts@3.4 之前，如果 mapped type 中使用了 readonly modifier，
   * 则对于 array 和 tuple 来说，结果类型中的 readonly 会被丢失，
   * 在 ts@3.4 之后，因为引入了 readonly shorthand syntax array 和 readonly tuple，
   * 这个问题就被修复了
   */

  interface Box<T> {
    value: T;
  }

  type ReadonlyBoxify<T> = { readonly [K in keyof T]: Box<T[K]> };

  type A = ReadonlyBoxify<{ x: string; y: number }>;

  type B = ReadonlyBoxify<string[]>;

  type C = ReadonlyBoxify<[string, number]>;
}

export {};
