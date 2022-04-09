/* eslint-disable no-underscore-dangle */
/*
 * Classes
 *     Static Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 静态属性是直接定义在类上面的属性，区别于实例属性（定义在类的实例上的属性），
   * 通过关键字 static 标识一个属性是静态属性，
   * 通过 类.静态属性 的形式来访问静态属性，区别与实例属性（通过 this.实例属性 的形式来访问实例属性）；
   */

  class Person {
    /* 静态属性 */
    public static version: string = "0.0.1";

    private _name: string;

    get name(): string {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }

    /* 静态方法 */
    static ver() {
      console.log(Person.version);
    }
  }

  Person.ver();
  console.log(Person.version); // 0.0.1
}

export {};
