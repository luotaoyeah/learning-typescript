/*
 * Generics
 *     Generic Constraints
 *         Using Class Types in Generics
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 创建泛型的工厂方法时，通常需要使用构造函数签名来表示 class 的类型；
   * 构造函数签名跟普通函数签名类似，也有两种写法：
   *     1. call signature 方式：
   *         { new(): T; }
   *     2. arrow function 方式：
   *         new() => T
   */

  class Person {
    name: string = "tom";
  }

  function create01<T>(Ctor: new () => T): T {
    return new Ctor();
  }

  console.log(create01<Person>(Person).name); // tom

  function create02<T>(Ctor: new () => T): T {
    return new Ctor();
  }

  console.log(create02<Person>(Person).name); // tom
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   *
   */

  class BeeKeeper {
    keepBee() {
      console.log("keepBee()");
    }
  }

  class ZooKeeper {
    keepZoo() {
      console.log("keepZoo()");
    }
  }

  class Animal {
    name: string;
  }

  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }

  function create<T extends Animal>(Ctor: new () => T): T {
    return new Ctor();
  }

  create<Bee>(Bee).keeper.keepBee();
  create(Lion).keeper.keepZoo();
}

export {};
