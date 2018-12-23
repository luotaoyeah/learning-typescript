/*
 * Advanced Types
 *     Conditional Types
 *         Distributive conditional types
 *             combine with mapped types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 条件类型跟映射类型结合
   */

  type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
  }[keyof T];
  type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K
  }[keyof T];
  type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
  type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

  interface Part {
    id: number;
    name: string;
    subparts: Part[];

    updatePart(name: string): void;
  }

  type T01 = FunctionPropertyNames<Part>;
  /*
    const t01: T01 = 0; // TS2322: Type '0' is not assignable to type '"updatePart"'.
  */

  type T02 = NonFunctionPropertyNames<Part>;
  /*
    let t02: T02 = 0; // TS2322: Type '0' is not assignable to type '"id" | "name" | "subparts"'.
  */

  type T03 = FunctionProperties<Part>;
  const t03: T03 = { updatePart(name: string): void {} };

  type T04 = NonFunctionProperties<Part>;
  const t04: T04 = {
    id: 0,
    name: "FOO",
    subparts: []
  };
}

export {};
