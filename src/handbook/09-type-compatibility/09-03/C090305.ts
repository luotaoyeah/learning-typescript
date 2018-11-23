/*
 * Type Compatibility
 *     Comparing two functions
 *         Functions with overloads
 *         TODO 需要进一步理解
 */

console.log("\n-------------------------------------------------- 01");
{
  function fn01(x: string, y: string): void;
  function fn01(x: number, y: number): void;
  function fn01(x: any, y: any): void {
    console.log(x, y);
  }

  let foo: (x: number, y: number) => void = fn01;
  let bar: (x: string, y: string) => void = fn01;
}

console.log("\n-------------------------------------------------- 02");
{
  function fn01(x: string, y: string): void;
  function fn01(x: number, y: number): void;
  function fn01(x: any, y: any): void {
    console.log(x, y);
  }

  let foo: typeof fn01 = (x: number | string, y: number | string) => {};
}
