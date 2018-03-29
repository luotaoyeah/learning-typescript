/**
 * https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-control-over-mapped-type-modifiers
 * --------------------------------------------------
 */

/*
 * 以前的映射类型支持添加'只读修饰符（readonly）'，'可选修饰符（?）'，但是不支持移除已有的修饰符；
 * typescript@2.8 支持通过 + 和 - 进行修饰符的添加和移除；
 * --------------------------------------------------
 */
console.log("----------: prefix with '+' or '-'");
type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] };
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] };

/*
 * 前缀 + 可以省略；
 * --------------------------------------------------
 */
console.log("----------: prefix '+' can be omited");
type ReadonlyPartial02<T> = { readonly [P in keyof T]?: T[P] };

/*
 * typescript@2.8 添加了一个预定义类型 Reauired<T>；
 * --------------------------------------------------
 */
console.log("----------: predefined Required<T>");
type Required<T> = { [P in keyof T]-?: T[P] };

type Foo = { name?: string };
let foo: Foo = { name: "tom" };
foo = {};

type Bar = Required<Foo>;
let bar: Bar = { name: "tom" };
/*
  /!* TS2322:  Property 'name' is missing in type '{}' *!/
  bar = {};
*/

export {};
