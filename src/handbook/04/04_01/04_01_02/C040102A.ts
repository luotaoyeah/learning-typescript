/*
 * Classes
 *     Inheritance
 */

console.log("\n-------------------------------------------------- 01");
class Animal {
  move(distanceMeters: number = 0) {
    console.log(`Animal moved ${distanceMeters} m.`);
  }
}

/*
 * Dog 通过 extends 关键字继承了 Animal 类，
 * 从而继承了 Animal 的 move() 方法；
 */
class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

export {};
