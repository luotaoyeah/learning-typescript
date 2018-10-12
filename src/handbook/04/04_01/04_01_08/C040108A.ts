/*
 * Classes
 *     Advanced Techniques
 *         Constructor functions
 */

console.log("\n-------------------------------------------------- 01");
{
  class Greeter {
    constructor(public greeting: string) {}

    greet() {
      console.log("Greeter.greet()");
    }
  }

  /*
   * 第一个 Greeter 表示 Greeter 类的实例的类型，
   * 第二个 Greeter 表示 Greeter 类的构造函数；
   */
  const greeter: Greeter = new Greeter("tom");
  greeter.greet();
}

console.log("\n-------------------------------------------------- 02");
{
  class Greeter {
    static GREETING: string = "hello";
    constructor(public greeting?: string) {}

    greet() {
      console.log(Greeter.GREETING);
    }
  }

  new Greeter("tom").greet();

  /*
   * 变量 MyGreeter 直接指向了 Greeter 类本身，
   * 类型 Greeter 表示 Greeter 类的实例的类型，
   * 类型 typeof Greeter 表示 Greeter 类的类型，即 Greeter 类的构造函数的类型；
   */
  const MyGreeter: typeof Greeter = Greeter;
  MyGreeter.GREETING = "hi";
  new MyGreeter("cat").greet();
}

export {};
