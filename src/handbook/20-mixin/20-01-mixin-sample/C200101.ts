/*
 * Mixins
 *     sample
 */

console.log("\n-------------------------------------------------- 01");

/*
 * OOP 中的继承是一种实现代码复用的方式，
 * 混合（mixin）是另一种通过组合不同组件实现代码复用的方式
 */

function mixin(target: Function, sources: Array<Function>) {
  sources.forEach(source => {
    Reflect.ownKeys(source.prototype).forEach(key => {
      target.prototype[key] = source.prototype[key];
    });
  });
}

class A {
  x: string;

  fn01() {
    console.log("FN01");
  }
}

class B {
  y: string;

  fn02() {
    console.log("FN02");
  }
}

class C implements A, B {
  x: string;
  y: string;

  /*
   * 如果直接将 fn01 声明为一个 method，则此处必须实现 fn01()
   * 而我们的目的就是直接使用其他类的实现，不提供自己的实现，
   * 因此此处通过将 fn01 声明为一个类型为 function 的属性，
   * 即通过了编译器的检查，又不用提供实现
   */
  /*
    fn01():void; // TS2391: Function implementation is missing or not immediately following the declaration.
  */
  fn01: () => void;
  fn02: () => void;
}

mixin(C, [A, B]);

const c = new C();

c.x = "X";
console.log(c.x); // X
c.fn01(); // FN01
c.fn02(); // FN02

export {};
