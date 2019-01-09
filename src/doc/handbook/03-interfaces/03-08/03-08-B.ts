/*
 * interface 支持多重继承，
 * 即一个 interface 可以 extends 多个 interface；
 */
console.log("\n-------------------------------------------------- 01");

interface A {
  x: string;
}

interface B {
  y: string;
}

/*
 * 多个父接口之间使用逗号分隔；
 */
interface C extends A, B {
  z: string;
}

const c: C = { x: "foo", y: "bar", z: "baz" };
console.log(c);

export {};
