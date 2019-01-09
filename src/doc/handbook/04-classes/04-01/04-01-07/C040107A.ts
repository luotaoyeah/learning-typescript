/*
 * Classes
 *     Abstract Classes
 */

console.log("\n-------------------------------------------------- 01");
{
  // 使用 abstract 关键字将一个类标识为抽象类
  abstract class Person {
    private _name: string;

    get name(): string {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }
  }

  /*
    // 抽象类不能被实例化
    const person = new Person(); // TS2511: Cannot create an instance of an abstract class.
  */

  // 抽象类可以被继承
  class Boy extends Person {}

  const boy = new Boy();
  boy.name = "tom";
  console.log(boy.name);

  // 抽象类的子类可以依然是一个抽象类
  abstract class Girl extends Person {}
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 抽象类中可以定义抽象方法，抽象方法跟接口中的方法类似，只有方法签名，没有方法实现；
   */
  abstract class Person {
    abstract say(): void;

    // 抽象类中依然可以定义非抽象方法
    sing(): void {
      console.log("Person.sing()");
    }
  }

  /*
   * 如果抽象类的子类不是抽象类，则该子类必须实现抽象类中的所有抽象方法；
   */
  class Boy extends Person {
    say(): void {
      console.log("Boy.say()");
    }
  }

  new Boy().say();
  new Boy().sing();

  /*
   * 如果抽象类的子类依然是一个抽象类，则不用实现抽象类的抽象方法；
   */
  abstract class Girl extends Person {}
}

export {};
