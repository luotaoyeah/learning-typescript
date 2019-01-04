/*
 * Declaration Merging
 *     Merging Interfaces
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 两个同名的 interface 中的成员，会被合并到一个 interface 中去
 */

interface IFoo {
  x: string;
}

interface IFoo {
  y: number;
}

const foo: IFoo = { x: "", y: 9 };

export {};
