/*
 * Classes
 *     Public, private, and protected modifiers
 *         Understanding protected
 */

console.log("\n-------------------------------------------------- 01");
/*
 * protected 跟 private 类似，区别在于：使用 protected 修饰的成员，除了可以在自己类内部访问之外，
 * 还可以在子类中访问；
 */

{
  class Animal {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Dog extends Animal {
    private age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    fn() {
      // protected 属性 name 可以在子类中访问
      console.log(`${this.name}: ${this.age}`);
    }
  }

  new Dog("D", 18).fn();
}
/*
  // protected 属性 name 不能在类的外部访问
  console.log(dog.name); // TS2445: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
*/

console.log("\n-------------------------------------------------- 02");
{
  class Animal {
    protected name: string;

    protected constructor(name: string) {
      this.name = name;
    }

    fn() {
      console.log("Animal.fn()");
    }
  }

  class Dog extends Animal {
    private age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    fn() {
      // 将 constructor 设置为 protected，在子类中可以实例化该类；
      const animal = new Animal("A");
      animal.fn();
    }
  }

  new Dog("D", 18).fn();

  /*
    // 将 constructor 设置为 protected，则不能在外部实例化该类；
    const animal = new Animal("A"); // TS2674: Constructor of class 'Animal' is protected and only accessible within the class declaration.
  */
}

export {};
