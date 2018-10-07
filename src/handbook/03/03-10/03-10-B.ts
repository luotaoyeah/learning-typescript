/*
 * Interfaces
 *     Interfaces Extending Classes
 */

/*
 * 如果一个 interface 继承一个 class，
 * 则 interface 会继承 class 的所有属性，包括私有属性，
 * 此时，该 interface 只能被该 class 以及它的子类实现；
 */
console.log("\n-------------------------------------------------- 01");

/**  */
class Control {
  private state: any = "foo";
}

/**  */
interface ISelectControl extends Control {
  select(): void;
}

/** Button 是 Control 的子类，所以可以实现 ISelectControl 接口  */
class Button extends Control implements ISelectControl {
  select(): void {}
}

/*
 * Image 类要实现 ISelectControl 接口，则必须实现 state 属性，
 * 但是 state 属性是 private 的，不能被继承，同时 Image 也不能声明它自己的 state 属性，
 * 所以 Image 不能实现 ISelectControl 接口；
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
