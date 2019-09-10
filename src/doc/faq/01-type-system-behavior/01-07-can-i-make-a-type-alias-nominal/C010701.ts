/*
 * Type System Behavior
 *     Can I make a type alias nominal?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 因为 TS 是 structural typing 的，
   * 而 type alias 仅仅是类型别名，
   * 因此，type alias 是不能实现 nominal typing 的
   */

  type A = string;
  type B = string;

  let a: A = "A";
  let b: B = "B";
  a = b;
  b = a;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 对于这种需求，通常的做法是：
   *     借助一个唯一的 literal 组成 intersection type
   * 这样，每个类型都有一个唯一的，不会与其他类型兼容的成员属性，
   * 因此，这些类型不会相互兼容
   */

  type A = string & { A: "" };
  type B = string & { B: "" };

  let a: A = "A" as A;
  const b: B = "B" as B;

  // TS2322: Type 'B' is not assignable to type 'A'.
  //   Property 'A' is missing in type 'String & { B: ""; }' but required in type '{ A: ""; }'.
  // @ts-ignore
  a = b;
}

export {};
