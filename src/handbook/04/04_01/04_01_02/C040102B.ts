/*
 * Classes
 *     Inheritance
 */

console.log("\n-------------------------------------------------- 01");
/**  */
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`Animal.move(): ${this.name} moved ${distance} m.`);
  }
}

/**  */
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  /*
   * 在子类中声明父类的同名方法，实现方法覆写（override）
   */
  move(distance: number = 0): void {
    console.log("Snake.move()");
    /*
     * 通过 super 调用父类的方法
     */
    super.move(distance);
  }
}

/**  */
class Horse extends Animal {
  constructor(name: string) {
    console.log("Horse.constructor()");
    /*
     * 在 constructor 中，必须调用父类构造函数，即 super()，
     * 且必须在访问 this 之前调用；
     */
    super(name);
    console.log(`Horse.constructor(): ${this.name}`);
  }

  move(distance: number = 10): void {
    console.log("Horse.move()");
    super.move(distance);
  }
}

const snake = new Snake("Tom");
snake.move(15);

const horse: Animal = new Horse("Sam");
horse.move(20);

export {};
