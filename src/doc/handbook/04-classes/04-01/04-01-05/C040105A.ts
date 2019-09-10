/* eslint-disable no-underscore-dangle */
/*
 * Classes
 *     Accessors
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * getter/setter 可以用来拦截对对象成员的访问和修改；
   */

  let PASSCODE = "no";

  class Person {
    private _name: string;

    get name() {
      return this._name;
    }

    set name(value: string) {
      if (PASSCODE !== "yes") {
        console.error("无权访问");
        return;
      }

      this._name = value;
    }
  }

  const person = new Person();
  person.name = "tom";
  console.log(person.name); // undefined

  PASSCODE = "yes";
  person.name = "cat";
  console.log(person.name); // cat
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果只有 getter 没有 setter，则该属性是只读的（readonly）；
   */

  class Person {
    private _name: string;

    get name(): string {
      return this._name;
    }
  }

  const person = new Person();
  /*
    person.name = "tom"; // TS2540: Cannot assign to 'name' because it is a constant or a read-only property.
  */
}

export {};
