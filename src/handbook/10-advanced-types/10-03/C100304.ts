/*
 * Advanced Types
 *     Type Guards and Differentiating Types
 *         instanceof type guards
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以使用 instanceof 语句实现 type guard
   * instanceof 右边必须是一个 constructor function
   */

  class Person {}

  class Boy extends Person {
    run() {
      console.log("run");
    }
  }

  class Girl extends Person {
    sing() {
      console.log("sing");
    }
  }

  function getPerson(): Boy | Girl {
    return Math.random() < 0.5 ? new Boy() : new Girl();
  }

  const person: Person = getPerson();

  if (person instanceof Boy) {
    person.run();
  }

  if (person instanceof Girl) {
    person.sing();
  }
}
