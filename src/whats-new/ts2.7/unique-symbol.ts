/**
 * unique symbol
 */

/*
 * 'unique symbol' 是 symbol 的子类型；
 * 只能通过显示声明类型，Symbol()，Symbol.for() 来得到；
 * --------------------------------------------------
 */

/*
 * 用在常量声明；
 * --------------------------------------------------
 */
console.log("----------: const");
const foo01: unique symbol = Symbol("FOO");
console.log(foo01);

/*
 * 用在静态只读属性；
 * --------------------------------------------------
 */
console.log("----------: static readonly");
class Foo {
  static readonly foo02: unique symbol = Symbol.for("FOO");
}
console.log(Foo.foo02);

/*
 * 两个 unique symbol 类型的变量不能进行比较，会报错；
 * --------------------------------------------------
 */
console.log("----------: static readonly");
const foo03: unique symbol = Symbol("FOO03");
const foo04: unique symbol = Symbol("FOO04");

/*
  /!* TS2365: Operator '===' cannot be applied to types 'unique symbol' and 'unique symbol'. *!/
  console.log(foo03 === foo04);
*/

export {};
