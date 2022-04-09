/*
 * Advanced Types
 *     Conditional Types
 *         Distributive conditional types
 *             filter union type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可分发的条件类型（distributive conditional type ）可以用来过滤联合类型，
   * 在 T extends U ? X : Y 中，当 T 是一个联合类型时，
   * 如果 X 为 never，表示从 T 中排除该成员类型，
   * 如果 Y 为 never，表示从 T 中保留该成员类型
   */

  type Diff<T, U> = T extends U ? never : T;
  type Filter<T, U> = T extends U ? T : never;

  type T01 = Diff<"a" | "b" | "c" | "d" | "e" | "f" | "g", "a" | "e">;
  // @ts-ignore
  const t01: T01 = "e"; // TS2322: Type '"e"' is not assignable to type '"b" | "c" | "d" | "f" | "g"'.

  type T02 = Filter<"a" | "b" | "c" | "d" | "e" | "f" | "g", "a" | "e">;
  // @ts-ignore
  const t02: T02 = "b"; // TS2322: Type '"b"' is not assignable to type '"a" | "e"'.
}

console.log("\n-------------------------------------------------- 02");
{
  type Diff<T, U> = T extends U ? never : T;
  type NonNullable<T> = Diff<T, null | undefined>;

  type T01 = string | null | undefined;
  let t01: T01 = "FOO";
  t01 = null;
  t01 = undefined;

  let t02: NonNullable<T01> = "FOO";
  // @ts-ignore
  t02 = null; // TS2322: Type 'null' is not assignable to type 'string'.
  // @ts-ignore
  t02 = undefined; // TS2322: Type 'undefined' is not assignable to type 'string'.
}

export {};
