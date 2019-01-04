/*
 * Declaration Merging
 *     Merging Interfaces
 *         non-function property must be of the same type
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 如果两个 interface 中拥有同名的属性，且该属性不是一个 function
 * 则该属性的类型必须相同，否则编译报错
 */

/*
 * 下面两个 interface 都拥有属性 x，且 x 属性不是一个 function
 * 但是 x 这在两个 interface 中的类型不同，一个是 string，一个是 number，
 * 因此编译报错
 */

interface IFoo {
  x: string;
  y: string;
}

interface IFoo {
  // @ts-ignore
  x: number; // TS2717: Subsequent property declarations must have the same type.  Property 'x' must be of type 'string', but here has type 'number'.
  z: number;
}

export {};
