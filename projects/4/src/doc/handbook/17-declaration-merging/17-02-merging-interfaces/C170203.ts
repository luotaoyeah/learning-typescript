/*
 * Declaration Merging
 *     Merging Interfaces
 *         function property
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 对于 function 类型的属性，不同 interface 中的该属性，相当于是同一个 function 的不同的重载，
 * 且越靠后面的 interface，在合并之后，会排在重载列表的越前面
 */

interface IFoo {
  fn01(x: any): any;
}

interface IFoo {
  fn01(x: string): string;
}

interface IFoo {
  fn01(x: number): number;
  fn01(x: boolean): boolean;
}

/*
 * 合并之后的形式：
 * 为了演示效果，起了一个其他的 interface 名称（IFOO）
 */
interface IFOO {
  /*
   * 注意，最后面的 interface 的属性排在了最前面，
   * 但是在该 interface 中，原来的顺序没有变，
   * 即 （fn01(x: number): number;） 还是排在 （fn01(x: boolean): boolean;） 前面
   */
  fn01(x: number): number;
  fn01(x: boolean): boolean;

  fn01(x: string): string;

  fn01(x: any): any;
}

declare const foo: IFoo;
foo.fn01(9);
foo.fn01("9");
foo.fn01(null);

export {};
