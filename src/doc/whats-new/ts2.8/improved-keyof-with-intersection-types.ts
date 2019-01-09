/**
 * https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-keyof-with-intersection-types
 * --------------------------------------------------
 */

/*
 * 对交叉类型（intersection type）的 keyof 操作，等价于分别对每个类型进行 keyof 操作的合并类型（union type）；
 * keyof (A & B) 等价于 (keyof A) | (keyof B)；
 * --------------------------------------------------
 */
console.log("----------: keyof with intersection type");
type A = { a: string };
type B = { b: number };

/* "a" | "b" */
type C = keyof (A & B);
type D = keyof A | keyof B;
let c: C = "a";
c = "b";

let d: D = c;

export {};
