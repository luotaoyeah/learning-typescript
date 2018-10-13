/*
 * Functions
 *     Function Types
 *         Inferring the types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在使用函数表达式的时候，可以只书写等号左边的类型标注，或者等号右边的类型标注，
   * TS 可以推断出另外一边的类型，这种类型推断称之为 contextual typing
   */

  const fn01: (x: number, y: number) => number = (x, y) => {
    return x + y;
  };

  const fn02 = (x: number, y: number): number => {
    return x + y;
  };
}

export {};
