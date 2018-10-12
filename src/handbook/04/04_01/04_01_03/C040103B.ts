/*
 * Classes
 *     Public, private, and protected modifiers
 *         Understanding private
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 使用 private 标注的属性和方法，只能在当前类里面访问；
 */

{
  class Animal {
    private name: string;

    constructor(name: string) {
      /* 当前类中，可以访问私有属性 */
      this.name = name;
    }
  }

  const animal = new Animal("Tom");
}
/*
  // 在类的外部，不能访问类的私有属性
  console.log(animal.name); // TS2341: Property 'name' is private and only accessible within class 'Animal'.
*/

console.log("\n-------------------------------------------------- 02");
/*
 * 在判断两个类型是否兼容时，如果两个类型的所有成员的类型都兼容，则认为这两个类型是兼容的；
 * 当某个类型拥有 private 属性时，则另一个类型也必须拥有同样的 private 属性，
 * 且这两个 private 属性必须来自同一个地方，才认为这两个类型是兼容的；protected 属性类似；
 */

{
  class Animal {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  }

  class Person {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  let animal = new Animal("A");
  let dog = new Dog("D");
  let person = new Person("P");
  // Dog 继承自 Animal，因此也继承了 private 属性 name，即它们的 private 属性 name 是来自同一个地方，因此类型是兼容的；
  animal = dog;
  /*
    // Animal 和 Person 都拥有一个 private 属性 name，但是它们不是来自同一个地方，而是各自在自己内部定义的，所以类型不兼容；
    animal = person; // TS2322: Type 'Person' is not assignable to type 'Animal'. Types have separate declarations of a private property 'name'.
  */
}

export {};
