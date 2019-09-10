/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     typeof, instanceof, And User Defined Type Predicates
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以对 unknown 类型使用 instanceof/typeof/user defined type predicate
   */

  // tslint:disable-next-line:ban-types
  const isFunction = (x: unknown): x is Function => typeof x === "function";

  const fn01 = (x: unknown): void => {
    if (typeof x === "string") {
      console.log(x.toUpperCase());
    } else if (x instanceof Number) {
      console.log(x.toFixed(2));
    } else if (isFunction(x)) {
      console.log(x.name);
    }
  };
}

export {};
