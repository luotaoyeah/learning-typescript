/*
 * Classes
 *     Public, private, and protected modifiers
 */

console.log("\n-------------------------------------------------- 01");
/*
 * TS 中类的成员（属性，方法）默认就是 public 的，
 * 也可以使用 public 关键字显式声明为 public 的；
 */

class Animal {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public move(distance: number = 0) {
    console.log(distance);
  }
}

export {};
