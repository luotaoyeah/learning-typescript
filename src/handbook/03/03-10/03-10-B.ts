/*
 * interface 会继承 class 的所有属性，包括私有属性，
 * 此时，该 interface 只能被该 class 以及它的子类实现；
 */
console.log("\n-------------------------------------------------- 01");

class Control {
  private state: any = "foo";
}

interface ISelectControl extends Control {
  select(): void;
}

class Button extends Control implements ISelectControl {
  select(): void {}
}

class TextBox extends Control {}

/*
 * Image 类要正确实现 ISelectControl 接口，则它必须实现 state 属性，
 * 但是 state 属性是 private 的，不能继承，也不能声明自己的 state 属性；
 */
/*
  // TS2420: Class 'Image' incorrectly implements interface 'ISelectControl'.
  // Types have separate declarations of a private property 'state'.
  class Image implements ISelectControl {
    private state: any;

    select(): void {}
  }
*/

export {};
