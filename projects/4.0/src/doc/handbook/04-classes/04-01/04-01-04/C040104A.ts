/*
 * Classes
 *     Readonly modifier
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 使用 readonly 关键字将属性设置为只读属性，
 * 只读属性必须在声明的时候初始化，或者在 constructor 中初始化，
 * 在其他地方赋值会报错；
 */

class Person {
  readonly name: string;
  readonly age: number = 18;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("P");

/*
  person.name = "B"; // TS2540: Cannot assign to 'name' because it is a constant or a read-only property.
*/

export {};
